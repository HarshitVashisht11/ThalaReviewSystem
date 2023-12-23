// components/Home.js
"use client";
// components/Home.js
import React, { useState } from 'react';
import { generateVideoContent } from '../../../utils/api';
import Modal from 'react-modal';
import VideoRenderer from './VideoRenderer';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [videoPaths, setVideoPaths] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [generatedText, setGeneratedText] = useState('');

  const handleSubmit = async () => {
    try {
      const paths = await generateVideoContent(inputValue);
      setVideoPaths(paths);

      // Get the generated text from the API
      const text = await generateVideoContent(inputValue, true);
      setGeneratedText(text);

      setModalIsOpen(true);
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setVideoPaths([]); // Clear video paths
    setGeneratedText('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 relative">
      <h1 className="text-3xl text-white font-bold mb-4">Thala Review System 7️⃣</h1>
      <div className="bg-zinc-800 p-8 rounded-lg shadow-lg relative z-10">
        <input
          type="text"
          placeholder="Enter something"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-4 bg-zinc-700 text-white rounded-md outline-none"
        />
        <div className="flex justify-center mt-4">
          <button
            onClick={() => {
              handleSubmit();
            }}
            className="p-4 bg-zinc-600 text-white rounded-md hover:bg-zinc-700 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </div>

      {videoPaths.length > 0 && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Video Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <VideoRenderer videoPaths={videoPaths} closeModal={closeModal} generatedText={generatedText} />
        </Modal>
      )}

      <h1 className="my-5 text-sm text-white font-bold mb-4 z-10">Made with ❤️ By Harshit </h1>
    </div>
  );
};

export default Home;

