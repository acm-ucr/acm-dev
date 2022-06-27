import React from "react";

const NavMedia = () => {
	return (
		// Change h-screen to min-h-screen
		// https://daily-dev-tips.com/posts/making-gradient-text-with-tailwind-css/
		<div className='bg-black'>
			<div className='text-center flex flex-col pt-10'>
				<h1 className='font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-100 to-pink-500'>
					Kanye
				</h1>
				<h1 className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-300 to-pink-700'>
					West
				</h1>
			</div>
		</div>
	);
};

export default NavMedia;
