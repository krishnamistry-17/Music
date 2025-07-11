//pass from two diff data using diff item

// {Array.isArray(data) &&
//   data.map((item, index) => {
//     const extra = data1[index]; // match by index

//     return (
//       <div key={item.id || index} className="pt-[15px]">
//         <div
//           onClick={() => setActiveIndex(index)}
//           className="grid grid-cols-4 rounded-md justify-between items-center bg-[#1E1E1E] pr-2 gap-9"
//         >
//           {/* Image, Title, Artist */}
//           <div className="flex">
//             <img
//               src={item.albumImages?.[0] || extra?.image}
//               alt="m1"
//               className="w-[60px] h-[60px] rounded-[5px] border"
//             />
//             <div className="pl-[23px]">
//               <p className="text-white text-[20px] pt-1">
//                 {item.title || extra?.head}
//               </p>
//               <p className="text-white text-[12px] pt-0.5">
//                 {item.artist || extra?.para}
//               </p>
//             </div>
//           </div>

//           {/* Release Date */}
//           <div>
//             <p className="text-white text-[16px]">
//               {(item.releaseDate || extra?.rdate)?.split("T")[0]}
//             </p>
//           </div>

//           {/* Album */}
//           <div>
//             <p className="text-white text-[16px]">{extra?.album}</p>
//           </div>

//           {/* Icons and Time */}
//           <div className="flex justify-end gap-2.5">
//             <img src={extra?.fimg} alt="pf" />
//             <p className="text-white text-[16px]">{extra?.ptime}</p>
//             <img src={extra?.oimage} alt="op" />
//           </div>
//         </div>
//       </div>
//     );
//   })} -->
