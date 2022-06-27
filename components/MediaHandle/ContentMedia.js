import React from "react";
import Link from "next/Link";
import Image from "next/image";

const ContentMedia = () => {
	return (
		// Change h-screen to min-h-screen
		// https://daily-dev-tips.com/posts/making-gradient-text-with-tailwind-css/
		// margin auto center things, max width xl, padding top 8, min height is height of screen
		<div className='bg-black'>
			<div className='bg-black container mx-auto max-w-xl pt-8 min-h-screen'>
				<h1 className='text-4xl m-8 text-center text-white'>
					Fan Discography
				</h1>
				<ul className='pl-0 '>
					<li className=''>
						<Link href='https://youtu.be/wUaMgTanG-4'>
							<a className='border p-4 border-blue-400  my-2 capitalize flex items-center text-lg bg-white rounded-lg'>
								<Image
									src={require("./MediaHandleMedia/error.png")}
									alt='loading...'
									height={100}
									width={150}
								/>
								<p className='ml-20 text-black'>
									Kanye West - Father Stretch My Hands, pt. 3
									(𝗢𝗚) ft. Kendrick Lamar, Kid Cudi, Desiigner
								</p>
							</a>
						</Link>
					</li>
					<li className=''>
						<Link href='https://youtu.be/JrmLri-saWQ'>
							<a className='border p-4 border-blue-400  my-2 capitalize flex items-center text-lg bg-white rounded-lg'>
								<Image
									src={require("./MediaHandleMedia/error2.webp")}
									alt='loading...'
									height={100}
									width={150}
								/>
								<p className='ml-20 text-black'>
									Denzel Curry - FORGIVE ME (prod. by Kanye
									West)
								</p>
							</a>
						</Link>
					</li>
					<li className=''>
						<Link href='https://youtu.be/SCTfA0r_Dd4'>
							<a className='border p-4 border-blue-400  my-2 capitalize flex items-center text-lg bg-white rounded-lg'>
								<Image
									src={require("./MediaHandleMedia/error3.webp")}
									alt='loading...'
									height={100}
									width={150}
								/>
								<p className='ml-20 text-black'>
									Frank Ocean & Kanye West - BLONDA (full
									mixtape)
								</p>
							</a>
						</Link>
					</li>
					<li className=''>
						<Link href='https://youtu.be/Iu37OXZ6cHk'>
							<a className='border p-4 border-blue-400  my-2 capitalize flex items-center text-lg bg-white rounded-lg'>
								<Image
									src={require("./MediaHandleMedia/error4.jpeg")}
									alt='loading...'
									height={100}
									width={150}
								/>
								<p className='ml-20 text-black'>
									Kanye West - 2049 (full mixtape)
								</p>
							</a>
						</Link>
					</li>
					<li className=''>
						<Link href='https://youtu.be/wLuEFrpwZOo'>
							<a className='border p-4 border-blue-400  my-2 capitalize flex items-center text-lg bg-white rounded-lg'>
								<Image
									src={require("./MediaHandleMedia/error5.jpeg")}
									alt='loading...'
									height={100}
									width={150}
								/>
								<p className='ml-20 text-black'>
									Denzel Curry - ZELEBRITY (prod. by Kanye
									West)
								</p>
							</a>
						</Link>
					</li>
					<li className=''>
						<Link href='https://youtu.be/wnZDY8JrBSg'>
							<a className='border p-4 border-blue-400  my-2 capitalize flex items-center text-lg bg-white rounded-lg'>
								<Image
									src={require("./MediaHandleMedia/error6.jpeg")}
									alt='loading...'
									height={100}
									width={150}
								/>
								<p className='ml-20 text-black'>
									Kanye West - HIGHEST IN THE ROOM (REMIX)
									feat. Mos Def & Freeway
								</p>
							</a>
						</Link>
					</li>
					<li className=''>
						<Link href='https://youtu.be/4sAQFuy_0Nc'>
							<a className='border p-4 border-blue-400  my-2 capitalize flex items-center text-lg bg-white rounded-lg'>
								<Image
									src={require("./MediaHandleMedia/error7.jpeg")}
									alt='loading...'
									height={100}
									width={150}
								/>
								<p className='ml-20 text-black'>
									Kanye West & Kendrick Lamar - SING ABOUT YE
									(feat. Pusha T)
								</p>
							</a>
						</Link>
					</li>
					<li className=''>
						<Link href='https://youtu.be/jhGj9IuMw50'>
							<a className='border p-4 border-blue-400  my-2 capitalize flex items-center text-lg bg-white rounded-lg'>
								<Image
									src={require("./MediaHandleMedia/error8.jpeg")}
									alt='loading...'
									height={100}
									width={150}
								/>
								<p className='ml-20 text-black'>
									Tyler, The Creator - 2049 (vol. 1)
								</p>
							</a>
						</Link>
					</li>
					<li className=''>
						<Link href='https://youtu.be/oOGCnah9Oqw'>
							<a className='border p-4 border-blue-400  my-2 capitalize flex items-center text-lg bg-white rounded-lg'>
								<Image
									src={require("./MediaHandleMedia/error9.jpeg")}
									alt='loading...'
									height={100}
									width={150}
								/>
								<p className='ml-20 text-black'>
									Kanye West - FSMH / THat Part (feat.
									ScHoolboy Q) (sample service flip)
								</p>
							</a>
						</Link>
					</li>
					<li className=''>
						<Link href='https://youtu.be/HhDcrTmIcTI'>
							<a className='border p-4 border-blue-400  my-2 capitalize flex items-center text-lg bg-white rounded-lg'>
								<Image
									src={require("./MediaHandleMedia/error10.jpeg")}
									alt='loading...'
									height={100}
									width={150}
								/>
								<p className='ml-20 text-black'>
									PRIDE By Kendrick Lamar (Slowed+Reverb)
								</p>
							</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className='w-max-xl h-20 bg-black'></div>
		</div>
	);
};

export default ContentMedia;
