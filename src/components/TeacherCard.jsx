 

const TeacherCard = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Md Salauddin </h2>
          <p>Post: Office Assistant</p>
          <div className="card-actions">
            <button className="btn btn-outline btn-warning uppercase">Show Details</button>
          </div>
        </div>
      </div>
    );
};

export default TeacherCard;