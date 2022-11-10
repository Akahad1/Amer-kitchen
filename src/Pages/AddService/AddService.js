import React from 'react';
import useTitle from '../../useTitel/UseTitel';

const AddService = () => {
  useTitle('Add Service')

  const addServicehandler=(event)=>{
   
    event.preventDefault()
    const form =event.target;
    const title=form.title.value;
    const imgurl =form.imgurl.value;
    const description=form.description.value;
    console.log(title,imgurl,description)

    const Service={
      title:title,
      photoURL:imgurl,
      description :description
    }
    fetch('http://localhost:5000/allservices',{
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(Service)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert("Service Succfully add")
                form.reset()
            }
        })
        .catch(error=>console.error(error))


    


  }
    return (
        <div>
           <form onSubmit={addServicehandler} className='my-5 mx-auto w-1/2 border-solid border-2 border-sky-500 rounded-md'>
           <div className="form-control my-3">
  
    <span className="label-text my-3">Enter Service Title</span>
  
  <input type="text" name='title' placeholder="Type title" className="input input-bordered  mx-auto w-1/2 max-w-xs " />
  
</div>
           <div className="form-control my-3 w-full">
  
    <span className="label-text my-3">Enter Services Price</span>

  <input type="number" name='Price' placeholder="Type Price" className="input input-bordered mx-auto w-1/2 max-w-xs" />
  
</div>
           <div className="form-control my-3 w-full">
  
    <span className="label-text my-3">Enter ImgURl</span>

  <input type="text" name='imgurl'  placeholder="Type imgUrl" className="input input-bordered mx-auto w-1/2 max-w-xs" />
  
</div>
           <div className="form-control my-3 w-full">
  
    <span className="label-text my-3">About Services 
Description</span>

  <textarea name='description' className="textarea mx-auto w-1/2 textarea-bordered max-w-xs" placeholder="Description"></textarea>

</div>
<button className='btn mb-5' type='submit'> Add Service</button>
           </form>
        </div>
    );
};

export default AddService;