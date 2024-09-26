import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import Header from './Header/Header'
import Cones from './ShopPopcorn/Cones'
import Footer from './Footer/Footer'

function Shop2() {
  const { pathName } = useParams()
  const [data, setData] = useState({ title: '', font: '' })

  const parts = data.title.split(data.font);
  let bgcolor = data.bagbgcolor
  let color = data.bagcolor
  let title = data.color
  let arrow = data.fontcolor
  useEffect(() => {
    fetch("/shop.json").then(res => res.json()).then(res => { setData(res[pathName]); })
  }, [pathName])

  return (
    <div className='bg-[#FAF1EB] relative overflow-hidden'>
      <svg class="hero-deco-left" xmlns="http://www.w3.org/2000/svg" className='absolute z-20 scale-[0.65] origin-top-left top-0 max-[900px]:top-[-40px] left-0 max-md:hidden duration-300' style={{ fill: data.fill }} xmlns:xlink="http://www.w3.org/1999/xlink" width="1920" height="1177.154" viewBox="0 0 1920 1177.154">
        <defs>
          <clipPath id="clip-path">
            <path id="mask_13" data-name="mask 13" d="M1920,0H0V1177.154H1920Z" transform="translate(-1423 -533.65)" ></path>
          </clipPath>
        </defs>
        <g id="group_7" data-name="group 7" transform="translate(1423 533.65)" opacity="1" clip-path="url(#clip-path)">
          <g id="group_933" data-name="group 933" transform="matrix(0.719, 0.695, -0.695, 0.719, -1372.798, -1017.372)">
            <path id="mask_806" data-name="mask 806" d="M574.9,690.584l-26.4-28.754C503.627,638.689,481.818,636.3,479.023,540.9,477.33,483.014,501.2,435,522.207,391.027c15.406-32.242,30.358-64.669,46.368-96.187,22.022-43.354,42.72-102.386,33.488-158.82C588.529,53.275,534.55,21.542,486.18,7.489,420.527-11.586,355.8,9.7,291.438,27.7c-44.152,12.348-88.732,21.122-132.713,33.953a442.262,442.262,0,0,1-90.879,16.12C56.154,78.6-89.1,110.878-125.3,95.659s15.844,50.084,21.039,49.178c31.617-5.522,212.817-48.946,244.234-56.77,85.221-21.228,174.308-47.025,261.1-43.726,17.992.682,35.593,6.479,53.374,8.707C499.635,58.708,560.6,83.711,568.1,167.337c4.425,49.352-19.846,104.611-37.423,141.3L476.928,421.706C449.9,479.3,416.466,549.987,433.4,625.9c6.353,28.487,20.983,47.287,38.455,52.376C513.335,690.365,533.3,695.676,574.9,690.584Z" transform="matrix(0.999, 0.035, -0.035, 0.999, 89.858, 51.768)" fill-rule="evenodd"></path>
            <path id="mask_1004" data-name="mask 1004" d="M482.543,641.073c-14.043.971-29.521,2.134-43.281-2.875-48.915-17.81-89.514-83.015-76-149.382C386.07,376.831,479.217,299.545,511.745,196.705c12.389-39.175,19.069-88.894,2.218-127.639C489.5,12.82,444.656,10.66,406.079,4.859c-93.12-14-183.444,4.795-275.557,24.146C96.974,36.054,63.247,43.43,29.533,48.382c-6.077.895-33.086-1.613-29.141,15.8C3.71,78.833,19.013,66.32,25.2,64.9c25.1-5.781,52.733-15.67,77.906-16.348,70.556-1.909,139.506-32.536,210.635-27.434,32.933,2.362,70.761,11.693,98.1,42.816,34.933,39.764,38.668,107.014,25.875,166.964-7.295,34.183-22.788,65.583-35.781,94.763-23.59,52.976-48.823,73.361-67.161,131.548-13.724,43.548-29.776,136.755-8.2,181.383,15.26,31.559,36.991,25.365,59.293,25.365,47.631,0,93.845,3.174,139.943-12.217C539.735,647.093,516.726,638.705,482.543,641.073Z" transform="matrix(0.995, -0.105, 0.105, 0.995, 84.997, 172.963)" fill-rule="evenodd"></path>
            <path id="mask_1056" data-name="mask 1056" d="M0,33.707c103.027-.094,202.154-26.5,302.667,21.571,41.482,19.839,91.65,49.515,86.749,122.862-2.7,40.425-25.71,77.1-41.353,109.2-37.852,77.685-86.942,174.164-67.872,271.763h29.967c-6.477-23.523-17.5-42.087-17.471-69.076.019-23.292,7.8-48.01,14.137-69.076,18.5-61.449,49.569-111.362,74.431-167.489,22.123-49.944,58.428-107.534,33.932-169.52-17.864-45.206-61.573-66.719-96.039-73.833C247.365-4.7,178.435-.093,106.383,4.321,79.345,5.977,52.557,14.182,25.472,16.773,13.4,17.929.189,11.508,0,33.707Z" transform="translate(84.222 242.508) rotate(-7)" fill-rule="evenodd" opacity="1"></path>
            <path id="mask_1160" data-name="mask 1160" d="M0,11.047v7.471C74,14.009,134.959,22.1,206.727,55.711,240.658,71.6,276.477,104.45,273.74,162.165c-2.025,42.748-14.05,71.384-28.975,107.119-25.719,61.579-55.88,131.87-55.88,205.442h28.959c-4.036-72.544,19.31-143.347,48.585-201.706,19.235-38.345,62.621-93.247,65.163-142.443C334.518,73.912,289.987,43.9,258,29.107,177.2-8.258,83.061-4.172,0,11.047Z" transform="translate(93.106 375.293) rotate(-14)" fill-rule="evenodd" opacity="1"></path>
            <path id="mask_1294" data-name="mask 1294" d="M152.835.461c5.241,0,15.139-1.566,19.558,1.075,5.336,3.19,6.837,14.817,8.69,19.838C186.151,35.116,194.306,49.2,201.72,62.2c23.788,41.726,60.633,91.565,21.737,134.989-7.009,7.825-15.515,13.723-24.962,19.42-10.69,6.45-25.328,11.176-38.014,14.159-40.351,9.49-80.615,11.417-122.339,11.417-9.276,0-37.563,3.125-38.132-7.33-.794-14.606,41.646-9.219,53.424-11.155,50.258-8.26,111.465-10.948,143.215-49.533,32.985-40.087-1.961-99.476-23.572-138.129C166.845,24.892,154.814,12.67,152.835.461Z" transform="matrix(0.788, -0.616, 0.616, 0.788, 390.652, 770.175)" fill-rule="evenodd"></path>
          </g>
        </g>
      </svg>
      <Header bgcolor={bgcolor} color={color} title={title} arrow={arrow} />
      <div style={{ background: data.backgroundColor }} className='relative overflow-hidden px-[30px] lg:pt-28 pt-16 max-md:pt-28 mx-auto  h-[80vh] max-[1492px]:h-[90vh] max-[1200px]:h-[80vh] max-lg:h-[60vh]  max-[900px]:h-[55vh]  duration-300 '>
        <div className="  gap-x-16 md:mt-20">
          <div style={{ paddingLeft: "calc((100vw - 1180px) / 2)" }} className="max-md:text-center w-[50%]  lg:pt-[150px] max-md:w-full max-[1200px]:w-[45%] float-left leading-[1.1]">
            <p style={{ color: data.titlecolor }} className=' relative z-20 text-[19px] max-md:text-[17px]'>{data.subtitle}</p>
            <div className='leading-none '>
              <svg class="hero-deco-right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style={{ fill: data.fill }} className='absolute duration-300 top-0 right-[-200px] max-lg:right-[-700px]' width="1920" height="1177.154" viewBox="0 0 1920 1177.154">
                <defs>
                  <clipPath id="clip-path2">
                    <path id="maskr_13" data-name="maskr 13" d="M1920,0H0V1177.154H1920Z" transform="translate(-1423 -533.65)" ></path>
                  </clipPath>
                </defs>
                <g id="groupr_7" data-name="groupr 7" transform="translate(1423 533.65)" opacity="1" clip-path="url(#clip-path2)">
                  <g id="groupr_828" data-name="groupr 828" transform="translate(-519.07 -366.637) rotate(-16)">
                    <path id="maskr_159" data-name="maskr 159" d="M1082.761,219.157c0-16.559,7.834-60.154-2.409-73.321-8.784-11.3-36.395-10.286-49.173-12.527-51.995-9.123-102.422-8.333-154.745-2.849-68.5,7.179-130,32.065-194.6,53.437-127.372,42.136-255.081,88.012-391.553,70-44.484-5.867-96.7-36.521-98.375-86.326-.923-27.54,121.671-125.851,228.309-212.229,2.421-16.582-13.474-26.571-32.328-20.352C369.156-58.828,152.595,99.373,139.821,113.648c-22.22,24.832-50.68,51.2-64.433,82.062-25.079,56.274.8,122.067,57.8,144.28,39.592,15.428,90.453,7.608,131.3,1.723,95.977-13.83,188.918-39.012,281.355-68.366C665,235.5,795,161.134,923.326,170.131,981.816,174.229,1029.177,199.392,1082.761,219.157Z" transform="translate(47.743 0)" fill-rule="evenodd" opacity="1"></path>
                    <path id="maskr_212" data-name="maskr 212" d="M1130.5,336.291c0-20.035,8.309-63.8-2.409-80.855-11.582-18.423-43.827-31.787-63.24-39.651C1001.617,190.168,935.3,184.834,867.906,191.1c-64.252,5.973-123.6,28.127-185.226,45.714-117.6,33.566-239.4,73.5-361.073,88.117-74.07,8.9-165.662,27.063-219.507-40.222C72.168,247.306,68.574,202.1,84.094,158.1,145.205-13.684,334.373-48.7,403.329-166.809c.136-1.319-75.254-.327-82.1,7.237C281.706-49.64,114.558-7.7,52.725,153.41c-34.314,88.867,8.719,196.067,109.447,210.011,48.074,6.656,102.018-4.6,150.056-10.354,126.66-15.164,249.343-47.353,372.8-78.613,107.056-27.11,217.517-49.952,325.9-15.469C1059.368,274.4,1090.393,308.035,1130.5,336.291Z" transform="translate(0 46.99)" fill-rule="evenodd" opacity="1"></path>
                    <path id="maskr_806" data-name="maskr 806" d="M1040.306,853.6V825.467c-72.572,0-201.694-3.165-206.236-103.164-2.752-60.673,36.04-111,70.189-157.09C929.3,531.418,953.6,497.43,979.624,464.394c35.794-45.442,69.436-107.317,54.43-166.469-22-86.731-109.734-119.992-188.353-134.722-106.71-19.994-211.922,2.318-316.525,21.187-71.763,12.942-144.221,22.139-215.706,35.589a1083.392,1083.392,0,0,1-147.712,16.9c-19,.862-57.035-1.553-72.029,11.577-22.6,19.792,26.072,19.827,34.515,18.877,51.388-5.788,103.682-11.465,154.746-19.666,138.515-22.251,283.313-49.29,424.378-45.832,29.243.715,57.851,6.791,86.751,9.126,73.451,5.932,172.547,32.139,184.73,119.793,7.192,51.728-32.256,109.649-60.826,148.107L830.664,597.37c-43.933,60.368-98.272,134.459-70.752,214.03,10.325,29.859,45.668,43.291,74.067,48.625C901.4,872.694,972.69,858.939,1040.306,853.6Z" transform="translate(90.198 183.83)" fill-rule="evenodd"></path>
                    <path id="maskr_1004" data-name="maskr 1004" d="M1039.1,818.206c-55.43.152-110.916,18.575-166.469,21.011-22.822,1-47.977,2.2-70.339-2.957-79.495-18.32-93.829-88.082-71.863-156.352,37.063-115.2,136.8-192.013,189.66-297.8,20.135-40.3,30.99-91.443,3.6-131.3-39.75-57.86-112.636-60.081-175.328-66.048-151.334-14.4-298.126,4.933-447.824,24.838-54.521,7.251-109.333,14.839-164.124,19.932-9.877.92-53.769-1.659-47.359,16.254,5.393,15.07,30.262,2.2,40.325.733,40.794-5.946,85.7-16.119,126.61-16.817,114.664-1.964,226.72-33.47,342.316-28.221,53.522,2.43,115,12.028,159.435,44.044,56.772,40.9,62.842,110.083,42.051,171.753-11.855,35.164-37.033,67.464-58.15,97.481-38.338,54.5-80.18,107.4-109.984,167.251-22.3,44.8-47.555,108.747-12.482,154.655,24.8,32.464,60.116,26.093,96.361,26.093,77.408,0,152.512,3.265,227.429-12.567C965.58,845.409,1038.176,846.066,1039.1,818.206Z" transform="translate(91.402 230.95)" fill-rule="evenodd"></path>
                    <path id="maskr_1056" data-name="maskr 1056" d="M92.8,236.873c161.217-.106,316.331-29.683,473.615,24.161C631.326,283.256,709.83,316.5,702.161,398.652c-4.229,45.281-40.231,86.361-64.709,122.319C578.22,607.987,501.4,716.054,531.246,825.375h46.893C568,799.027,550.762,778.233,550.8,748c.029-26.09,12.2-53.777,22.121-77.373,28.95-68.829,77.566-124.737,116.469-187.605,34.619-55.943,91.429-120.449,53.1-189.88-27.954-50.635-96.35-74.732-150.282-82.7-112.328-16.588-220.19-11.43-332.937-6.486C216.96,205.812,175.041,215,132.659,217.9,113.768,219.2,93.1,212.008,92.8,236.873Z" transform="translate(99.852 268.329)" fill-rule="evenodd" opacity="1"></path>
                    <path id="maskr_1160" data-name="maskr 1160" d="M89.6,225.936v9.378c131.818-5.659,270.752-14.056,398.587,28.138,60.439,19.947,124.239,61.186,119.365,133.641C603.944,450.759,572.1,497.6,545.519,542.461c-45.811,77.305-99.535,165.549-99.535,257.909h51.582c-7.189-91.071,34.4-179.956,86.54-253.22,34.261-48.138,91.6-109.4,96.13-171.158,5.214-71.136-74.1-108.811-131.088-127.384C405.234,201.7,237.549,206.83,89.6,225.936Z" transform="translate(93.674 293.333)" fill-rule="evenodd" opacity="1"></path>
                    <path id="maskr_1294" data-name="maskr 1294" d="M367.648,770.255c9.642,0,27.854,3.508,35.984-2.409,9.818-7.148,12.579-33.2,15.987-44.448,9.323-30.791,24.328-62.344,37.968-91.476,43.765-93.492,111.555-205.161,39.993-302.457-12.9-17.532-28.546-30.747-45.925-43.513-19.668-14.452-46.6-25.041-69.94-31.726-74.24-21.263-148.318-25.58-225.084-25.58-17.066,0-69.11-7-70.156,16.424-1.461,32.725,76.621,20.656,98.292,24.994,92.466,18.508,205.079,24.531,263.492,110.983,60.688,89.82-3.608,222.886-43.37,309.491C393.425,715.514,371.288,742.9,367.648,770.255Z" transform="translate(87.602 323.448)" fill-rule="evenodd"></path>
                    <path id="maskr_1392" data-name="maskr 1392" d="M515.183,244.8l-42.2,63.3L440.7,352.653c-49.53,65.779-134.676,193.655-38.059,257.068a138.754,138.754,0,0,0,42.2,18.121c23.27,5.955,48.727,8.016,72.683,8.511V603.528c-15.952-.7-32.121-5.331-46.893-11.307a99.469,99.469,0,0,1-30.477-19.39c-76.373-70.573,5.478-176.732,47.7-241.28C504.711,305.778,529.119,278.009,515.183,244.8Z" transform="translate(612.977 356.531)" fill-rule="evenodd"></path>
                    <path id="maskr_1393" data-name="maskr 1393" d="M123.145,290.3v7.034c86.766.24,190.929,71.652,217.561,154.746,13.918,43.428,6.9,80.878-.768,124.265-4.7,26.606-9.208,70.163-26.878,91.441-2.327,23.089-23.956,45.345-30.48,67.994h67.994c11.131-38.631,39.621-76.684,57.657-112.941,41.145-82.713,58.642-199.065-11.16-271.452-18.326-19-43.733-32.617-66.605-45.073C299,289.18,263.1,278.2,228.654,268.561c-32.9-9.206-67.086-11.881-100.819-16.779-12.806-1.861-29.029-9.929-41.76-4.291-12.967,5.744-10.4,23.95-1.805,32.42C93.9,289.405,110.506,290.264,123.145,290.3Z" transform="translate(69.507 357.925)" fill-rule="evenodd"></path>
                    <path id="maskr_1531" data-name="maskr 1531" d="M448.516,280.8,427.3,315.969c-30.518,50.908-68.164,162.4,23.563,178.192V346.45C450.861,327.057,456.033,298.71,448.516,280.8Z" transform="translate(679.643 426.04)" fill-rule="evenodd"></path>
                    <path id="maskr_1541" data-name="maskr 1541" d="M210.093,693.4c10.709,0,30.776,4.013,39.871-2.591,19.677-14.288,25.89-70.43,29.853-93.232,18.017-103.6,2.059-186.379-72.161-262.243-23.228-23.741-97.252-81.986-123.378-35.3-28.894,51.628,24.581,59.467,52.713,79.565,26.652,19.039,50.367,47.609,66.127,76.766,23,42.544,37.669,94.638,30.273,143.735C228.64,631.64,212.731,662.347,210.093,693.4Z" transform="translate(59.385 400.224)" fill-rule="evenodd" opacity="1"></path>
                    <path id="maskr_2004" data-name="maskr 2004" d="M125.909,432.9c6.211,21.565,17.071,40.272,18.546,63.3,1.213,18.971-5.332,37.52-6.823,56.271,8.153,0,22,2.617,28.95-2.409,12.523-9.059,14.883-44.317,15.507-58.551,1.846-42.233-8.016-81.611-31.2-117.231-6.53-10.032-14.321-24.569-25.193-30.416-20.4-10.97-47.4,6.166-48.771,28.071C75.417,396.157,102.437,428.548,125.909,432.9Z" transform="translate(69.088 541.228)" fill-rule="evenodd" opacity="1"></path>
                  </g>
                </g>
              </svg>
              <span style={{ color: data.titlecolor }} className='text-[60px] z-20 relative max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[33px]  inline'>
                {parts[0]}
              </span>
              <span style={{ color: data.fontcolor }} className='text-[90px] z-20 relative max-[1200px]:text-[60px] max-lg:text-[55px] max-md:text-[39px]  font-turbinado'>
                {data.font}
              </span>
              <span style={{ color: data.titlecolor }} className='text-[60px] z-20 relative max-[1200px]:text-[50px] max-lg:text-[45px] max-md:text-[33px]  inline'>
                {parts[1]}.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-[1200px] mx-auto">
        <svg style={{ fill: data.backgroundColor }} xmlns="http://www.w3.org/2000/svg" className='absolute  left-0 bottom-[-30px]  max-md:bottom-[-10px] rotate-180 duration-300 w-[120px] h-[35px] max-md:w-[40px] max-md:h-[10px] ' viewBox="0 0 119.48 59.998">
          <path id="Minus_1" data-name="Minus 1" d="M-2275.5,19221h-119.48a59.617,59.617,0,0,0,23.331-4.715,60.186,60.186,0,0,0,10.192-5.531,60.438,60.438,0,0,0,8.879-7.326,60.412,60.412,0,0,0,7.326-8.881,60.056,60.056,0,0,0,5.531-10.191A59.622,59.622,0,0,0-2335,19161a59.615,59.615,0,0,0,4.715,23.354,60.059,60.059,0,0,0,5.532,10.191,60.527,60.527,0,0,0,7.327,8.881,60.459,60.459,0,0,0,8.88,7.326,60.192,60.192,0,0,0,10.193,5.531A59.559,59.559,0,0,0-2275.5,19221Z" transform="translate(2394.976 -19161.002)"></path>
        </svg>
      </div>
      <div className="absolute max-md:relative max-md:flex justify-center md:top-0 max-md:bottom-[180px] max-md:px-[10%] mx-auto md:right-0 md:float-right md:pt-[14%]  md:w-[55%] max-md:justify-center md:pr-10 lg:mt-28 overflow-visible mt-10">
        <img className='rounded-tl-[120px] float-right rounded-br-[120px] max-lg:rounded-tl-[135px] max-lg:rounded-br-[135px] max-[550px]:rounded-tl-[80px] max-[550px]:rounded-br-[80px] px-2  min-[1200px]:scale-110  duration-300' src={`${data.img}`} alt="" />
      </div>
      <div className="">

      </div>
      <Cones pathName={pathName} />
      <Footer />

    </div >
  )
}

export default Shop2