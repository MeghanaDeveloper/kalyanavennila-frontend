import poster1 from "../../../assets/poster-1.jpg";
import poster2 from "../../../assets/poster-2.jpg";

const Blogs = () => {
  return (
    <>
      <section className="background-color padding-lr padding-tb mx-auto ">
        <div className="grid grid-cols-2 ">
          <img src={poster1} alt="" className="w-110 h-130 mx-auto" />
          <img src={poster2} alt="" className="w-110 h-130 mx-auto" />
        </div>
      </section>
    </>
  );
};

export default Blogs;
