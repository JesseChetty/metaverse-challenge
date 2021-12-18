import { useMoralis} from "react-moralis";
import TimeAgo from "timeago-react";
import Avatar from "./Avatar";
// import {useDropzone} from "react-dropzone";
// import { useState } from "react";

function Message({ message }) {
    const {user} = useMoralis();
    // const [ files, setFiles] = useState([]);

    const isUserMessage = message.get("ethAddress") === 
    user.get("ethAddress")

    // const{getRootProps, getInputProps} = useDropzone({
    //     actions: "image/*",
    //     onDrop: (acceptedFiles) => {
    //       setFiles(acceptedFiles.map((file) => Object.assign(file, {
    //         preview: URL.createObjectURL(file)
    //       }))
    //       )
    //     }
    //   })
    
    //   const images = files.map((file) => (
    //     <div key={file.name}>
    //         <div>
    //           <img src={file.preview} style={{width: '200px'}} alt="preview"/>
    //         </div>
    //     </div>
    //   )) 
    
    
    
      

    return (
        <div className={`flex item-end space-x-2 relative ${
            isUserMessage &&'justify-end'
            }`}>

                <div className={`relative h-8 w-8 ${
                    isUserMessage && 'order-last ml-2'
                    }`}>
                    <Avatar username={message.get("username")} />
                </div>
            <div className={`flex space-x-4 p-3 rounded-lg
            ${isUserMessage ? 
                'rounded-br-none bg-pink-300 '
                : 'rounded-bl-none bg-blue-400'
            }`}
            >
           <p>{message.get('message')}</p> 
           
        </div>
        
          {/* <div {...getRootProps()}>
            <input {...getInputProps()}/>
            <p className="flex fixed bottom-1 text-pink-500 opacity-80 px-6 py-4 max-w-2xl">Drop files here</p>
              <div>{images}</div>
          </div> */}

            <TimeAgo
            className={`text-[10px] italic text-gray-400 ${
                isUserMessage && 'order-first pr-1'
            } `}
                datetime={message.createdAt}
            />

        <p className={`absolute -bottom-5 text-xs ${
            isUserMessage ? 'text-pink-300'
            : "text-blue-400"
        }`}>
            {message.get('username')}
        </p>

    </div>
    )
}

export default Message
