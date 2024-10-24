import React, { useState, useEffect } from 'react';
import { songsName } from '../songs';

const AllSongs = () => {
    const [songsData, setSongsData] = useState([]); // State to hold songs and their images

    // Function to fetch the image URL for a song
    const fetchImage = async (song) => {
        try {
            const response = await fetch(`https://saavn.dev/api/search/songs?query=${song}`);
            const data = await response.json();
            const imageUrl = data?.data?.results[0]?.image[2]?.url; // Safely access image URL
            return imageUrl;
        } catch (error) {
            console.error('Error fetching image:', error);
            return null; // Return null if fetching fails
        }
    };

    useEffect(() => {
        const fetchSongsData = async () => {
            const fetchedData = await Promise.all(
                songsName.map(async (song) => {
                    const imageUrl = await fetchImage(song);
                    return { song, imageUrl }; // Return both song name and image URL
                })
            );
            setSongsData(fetchedData); // Update state with the fetched data
        };

        fetchSongsData(); // Call the function to fetch data
    }, []); // Empty dependency array to run effect only once

    return (
        <div>
            {songsData.map((songData, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <h3>{songData.song}</h3>
                    {songData.imageUrl ? (
                        <img src={songData.imageUrl} alt={songData.song} style={{ width: '150px' }} />
                    ) : (
                        <p>No image available</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AllSongs;
