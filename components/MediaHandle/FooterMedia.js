import React from "react";

const FooterMedia = () => {
	return (
		// Change h-screen to min-h-screen
		// https://daily-dev-tips.com/posts/making-gradient-text-with-tailwind-css/
		<div className='bg-black fixed inset-x-0 bottom-0 w-full text-center'>
			<div className='text-center flex flex-col'>
				<h1 className='font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
					Made with ✔
				</h1>
			</div>
		</div>
	);
};

export default FooterMedia;
