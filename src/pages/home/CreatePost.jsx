import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { TbMapPin, TbScript, TbVideo } from "react-icons/tb";

const CreatePost = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);
  const [location, setLocation] = useState("");
  const [thread, setThread] = useState([]);

  const imgRef = useRef(null);
  const videoRef = useRef(null);

  const isPending = false;
  const isError = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Post created successfully");
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleVideoChange = (e) => {
    const file = e.target.value[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setVideo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleThreadAdd = () => {
    const newThread = [...thread, { text: "" }];
    setThread(newThread);
  };

  const handleThreadRemove = (index) => {
    const newThread = [...thread];
    newThread.splice(index, 1);
    setThread(newThread);
  };

  const handleThreadChange = (index, text) => {
    const newThread = [...thread];
    newThread[index].text = text;
    setThread(newThread);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="flex p-4 items-start gap-4 border rounded-lg border-gray-700">
      <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
        <div className="flex">
          <textarea
            className="textarea w-full p-0 text-lg resize-none border-none focus:outline-none  border-gray-800"
            placeholder="What is happening?!"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn btn-primary rounded-full btn-sm text-white px-4 relative">
            {isPending ? "Posting..." : "Post"}
          </button>
        </div>
        {img && (
          <div className="relative w-72 mx-auto">
            <IoCloseSharp
              className="absolute top-0 right-0 text-white bg-gray-800 rounded-full w-5 h-5 cursor-pointer"
              onClick={() => {
                setImg(null);
                imgRef.current.value = null;
              }}
            />
            <img
              src={img}
              className="w-full mx-auto h-72 object-contain rounded"
            />
          </div>
        )}
        {video && (
          <div className="relative w-72 mx-auto">
            <IoCloseSharp
              className="absolute top-0 right-0 text-white bg-gray-800 rounded-full w-5 h-5 cursor-pointer"
              onClick={() => {
                setVideo(null);
                videoRef.current.value = null;
              }}
            />
            <video
              src={video}
              className="w-full mx-auto h-72 object-contain rounded"
              controls
            />
          </div>
        )}

        <div className="flex justify-between border-t py-2 border-t-gray-700">
          <div className="flex gap-3 items-center">
            <CiImageOn
              title="Image"
              className="fill-primary w-6 h-6 cursor-pointer"
              onClick={() => imgRef.current.click()}
            />
            <BsEmojiSmileFill
              title="Emoji😍"
              className="fill-primary w-5 h-5 cursor-pointer"
            />
            <TbVideo
              title="Video"
              className="text-primary w-7 h-7 cursor-pointer"
              onClick={() => videoRef.current.click()}
            />
            <TbScript
              title="Thread"
              className="text-primary w-6 h-6 cursor-pointer"
              onClick={handleThreadAdd}
            />
            <TbMapPin
              title="Location"
              className="text-primary w-6 h-6 cursor-pointer"
            />
          </div>
          <input type="file" hidden ref={imgRef} onChange={handleImgChange} />
          <input
            type="file"
            hidden
            ref={videoRef}
            onChange={handleVideoChange}
          />
        </div>
        {isError && <div className="text-red-500">Something went wrong</div>}
      </form>
    </div>
  );
};
export default CreatePost;
