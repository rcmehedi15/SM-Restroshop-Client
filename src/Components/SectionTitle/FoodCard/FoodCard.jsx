import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';
import useAdmin from '../../../Hooks/useAdmin';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [, refetch] = useCart();

    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch('https://sm-restroshop-server.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire(
                            'Good job!',
                            'Food Added On the cart!',
                            'success'
                        )
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    const handleAddtoCartAdmin = item => {
        Swal.fire({
            title: 'Sorry,Admin !!!',
            text: 'You are admin, if you buy any product then login as normal user',
            icon: 'error',
            confirmButtonText: 'Okay'
          })
    }
 

    return (
        <>
            <div className=" card w-96 bg-base-100 shadow-xl">
                <img src={image} alt="Shoes" className='h-64' />
                <p className="absolute  mr-4 mt-4 px-4 bg-[#393950] text-white">${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        {isAdmin ? (
                            <button onClick={() => handleAddtoCartAdmin(item)} className="btn btn-outline hover:bg-[#332FD0] mt-4">Add To Cart</button>
                        ) : (
                            <button onClick={() => handleAddToCart(item)} className="btn btn-outline hover:bg-[#332FD0] mt-4">Add to Cart</button>
                        )}

                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCard;