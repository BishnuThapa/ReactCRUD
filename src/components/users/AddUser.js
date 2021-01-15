import react, { useState } from 'react';

const AddUser = () => {

    // const [user, setUser] = useState({
    //     name: "",
    //     username: "",
    //     email: "",
    //     phone: "",
    //     website: ""
    // });
    return (
        <>
            <div className="container mt-3">
                <h3 className="mr-auto">Add a User</h3>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name </label>
                        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter your name" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Username </label>
                        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter your username" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email </label>
                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter your email address" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Phone Number</label>
                        <input type="text" class="form-control" placeholder="Enter your phone number" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Website</label>
                        <input type="text" class="form-control" placeholder="website" />
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </>
    )
}

export default AddUser;