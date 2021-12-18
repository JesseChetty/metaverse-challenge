import { useState } from "react";
import { useMoralis } from "react-moralis";
import {useDropzone} from "react-dropzone";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");
  const [ files, setFiles] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
        images:images,
      })
      .then((message) => {})
      .catch((error) => {
        console.log(error.message);
      });
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };
  const{getRootProps, getInputProps} = useDropzone({
    actions: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))
      )
    }
  })

  const images = files.map((file) => (
    <div key={file.name}>
        <div>
          <img src={file.preview} style={{width: '200px'}} alt="preview"/>
        </div>
    </div>
  )) 


  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()}/>
        {/* <p className="flex fixed bottom-1 text-pink-500 opacity-80 px-6 py-4 max-w-2xl">Drop files here</p> */}
          <div>{images}</div>
      </div>
    <form className="flex fixed bottom-12 bg-black opacity-80  w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a message ${user.getUsername()}...`}
      ></input>
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
    </div>
  );
}

export default SendMessage;
