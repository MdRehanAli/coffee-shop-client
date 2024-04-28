import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()

    const {name, quantity, supplier, taste, category, details, photo } = coffee

    const handleUpdateCoffee = event => {
        event.preventDefault()
        const form = event.target

        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee)

        // Send data to the server 
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-extrabold mb-10">Update Coffee</h1>

            <form onSubmit={handleUpdateCoffee}>
                <div className="md:flex w-50 gap-4 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} className="input input-bordered w-full" placeholder="Coffee Name" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered w-full" placeholder="Available Quantity" />
                        </label>
                    </div>
                </div>
                <div className="md:flex w-50 gap-4 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Enter coffee supplier:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" defaultValue={supplier} className="input input-bordered w-full" placeholder="Enter coffee supplier" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Enter coffee taste:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" defaultValue={taste} className="input input-bordered w-full" placeholder="Enter coffee taste" />
                        </label>
                    </div>
                </div>
                <div className="md:flex w-50 gap-4 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Enter coffee category:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} className="input input-bordered w-full" placeholder="Coffee Name" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Enter coffee details:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} className="input input-bordered w-full" placeholder="Enter coffee details" />
                        </label>
                    </div>
                </div>
                <div className="md:flex w-50 gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Enter photo URL:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} className="input input-bordered w-full" placeholder="Enter photo URL" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block btn-info mt-8" type="submit" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;