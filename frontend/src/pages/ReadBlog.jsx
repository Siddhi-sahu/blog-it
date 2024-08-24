import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import InputBlog from "../components/InputBlog";
import BlogCard from "../components/BlogCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReadBlog = () => {
  const blogId = useParams();
  console.log(blogId);
  //   const [blog, setBlog] = useState(null);
  //   const [error, setError] = useState("");
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const getBlogData = async () => {
  //       try {
  //         await axios.get("");

  //         setError("");
  //       } catch (err) {
  //         console.log("error fetching specific blog", err);
  //       }
  //     };
  //   }, []);
  return (
    <div className="grid grid-cols-5 md:grid-cols-12 h-screen">
      <Sidebar />
      <div className="col-span-4 md:col-span-10 bg-pink-100 p-6 overflow-y-auto">
        <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
          {
            <h1 className="text-3xl font-bold mb-4">
              {/* blog.title*/} {"hiiiiiiii there"}
            </h1>
          }
          <p className="text-sm text-gray-600 mb-8">
            By {/*blog.author*/} {"anuska"}{" "}
          </p>
          <div className="text-lg text-gray-800 leading-relaxed">
            {/*blog.blog*/}{" "}
            {
              " was too shy to say anything but Your poems are so beautiful. What kinds of things, feelings, or ideas inspire you, I mean, outside the raw experiences of your life? He turned a strange crosshatched color as if he stood in a clouded painting, and said, Thanks, but no other phenomena intrude upon my starlit mind. I see you are wondering what this is all about. Don’t mind me, I’m talking to myself again. Yes, poetry is nice and often beautiful, yet it doesn’t beget much attention, money, or even a simple thanks for placing the best words in the best order. That’s when I forget all about your incessant demands, and the restless subject leaps the stream in Technicolor— until the Remembrancer appears and says, Stop this wasteful life. Doctor, lawyer, thief. These fancies of yours could cost a life or worse, two. Meanwhile, he perceives my gifted body upholding my mind as I’m explaining my stuff on the Unicorn Tapestries, cheeks starting to color, feathers ruffling, quiet shudders. He shrugs, Your content sounds too beautiful but I’d like to read it sometime. Okay. He says all the right things, like I love you Hyacinth Girl. Things get interesting until the sudden blow: Thanks Or a murky midnight blue. Or have the crowd stagger by in a riot of color pinning down the helpless beast with spears and ritualistic thanks to their gods. What one really wants to get at is the real, the eternally beautiful like The White Album or something. That’s what makes one perilous life worth living. All the brute indifference, humiliation, and failure can put one in the mind to give up, freak out, kill somebody, heart battered, so mastered. Oh you Wherever I go, on the subway, in my cubicle, at play, in sleep, it’s always you of the air, overpowering my senses like a Dutch master in one pure color, its fiction at full speed, walls breaking, a clarity panorama for the mind hunting for meaning and finding it at last! Now look at all the work I did"
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBlog;
