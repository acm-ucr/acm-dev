import React from "react";
import { FaBackspace } from "react-icons/fa";
import Image from "next/image";
import loadingGif from "./imsorry.gif";

const SocialError = () => {
	return (
		<div>
			<div className='text-center mt-4'>
				<h1>Facebook Redirect</h1>
				<p className='m-10 text-lg'>
					Hello! We are no longer actively managing Facebook for
					ACM@UCR. Please check out our other socials or head back to
					our main page. We apologize for the inconvience.
				</p>
			</div>

			<div className='text-center flex flex-col item-center text-5xl'>
				<a href='/'>
					<button
						className='text-blue-500 background-transparent font-bold uppercase px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
						type='button'
					>
						<FaBackspace />
					</button>
				</a>
			</div>
			<div className='text-center w-full'>
				<Image
					src={loadingGif}
					alt='loading...'
					height={300}
					width={400}
				/>
			</div>

			<div className='fixed inset-x-0 bottom-0 w-full text-center'>
				<a href='/media-error' target='_blank' rel='noreferrer'>
					<button
						className='text-blue-500 background-transparent font-bold uppercase px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
						type='button'
					>
						<p>Made by ACM@UCR</p>
					</button>
				</a>
			</div>
		</div>
	);
};

export default SocialError;
