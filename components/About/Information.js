import React from "react";

const Information = () => {
	return (
		<section className='p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100'>
			<div className='container mx-auto space-y-12'>
				<div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row'>
					<img
						src='https://source.unsplash.com/640x480/?1'
						alt=''
						className='h-80 dark:bg-gray-500 aspect-video'
					/>
					<div className='flex flex-col justify-center flex-1 p-6 dark:bg-gray-900'>
						<h3 className='text-3xl font-bold'>About Us</h3>
						<p className='my-6 dark:text-gray-400'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dolor aliquam possimus quas, error esse quos.
						</p>
					</div>
				</div>
				<div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse'>
					<img
						src='https://source.unsplash.com/640x480/?2'
						alt=''
						className='h-80 dark:bg-gray-500 aspect-video'
					/>
					<div className='flex flex-col justify-center flex-1 p-6 dark:bg-gray-900'>
						<h3 className='text-3xl font-bold'>Our Vision</h3>
						<p className='my-6 dark:text-gray-400'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dolor aliquam possimus quas, error esse quos.
						</p>
					</div>
				</div>
				<div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row'>
					<img
						src='https://source.unsplash.com/640x480/?3'
						alt=''
						className='h-80 dark:bg-gray-500 aspect-video'
					/>
					<div className='flex flex-col justify-center flex-1 p-6 dark:bg-gray-900'>
						<h3 className='text-3xl font-bold'>What We Do</h3>
						<p className='my-6 dark:text-gray-400'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dolor aliquam possimus quas, error esse quos.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Information;
