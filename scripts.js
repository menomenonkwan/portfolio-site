console.log('hi')
// // const email = `brannon.lee@yahoo.com`;
// // const firstName = 'Brannon';
// // const lastName= 'Lee'

const getInfo = async () => {
  const res = await fetch(`https://mkpartners.secure.force.com/services/apexrest/careers?positionId=a0M4O00000qoC6UUAU&firstName=Brannon&lastName=Lee&email=brannon.lee@yahoo.com`, {
    method: "GET",
    "Access-Control-Allow-Headers": "*"
  });
  const data = await res.json();
  console.log(data);
}
getInfo();
// // fetch(`https://mkpartners.secure.force.com/services/apexrest/careers?positionId=a0M4O00000qoC6UUAU&firstName=$Brannon&lastName=Lee&email=brannon.lee@yahoo.com`)
// // .then(res => res.json())
// // .then(data => console.log(data));

// fetch(`https://mkpartners.secure.force.com/services/apexrest/careers?positionId=a0M4O00000qoC6UUAU&firstName=$Brannon&lastName=Lee&email=brannon.lee@yahoo.com`, {
//     method: "POST",
//     body: JSON.stringify({
//       application: {

//         isTest: true,
//         positionId: 'a0M4O00000qoC6UUAU',
//         firstName: 'Brannon',
//         lastName: 'Lee',
//         email: 'brannon.lee@yahoo.com',
//         phone: '650-773-7229',
//         zipcode: '90291',
//         describeYourself: 'Junior web developer with practical experience in website development, and fifteen years’ experience in       client relations looking to use my training in HTML, CSS, and JavaScript to develop engaging and userfocused web experiences that clearly communicate through digital content.',
//         ool: [
//           { languageName: 'javascript', proficiency: 8 }
//         ],
//         education: [
//           {
//             school: 'Santa Monica College',
//             graduationYear: 2019,
//             degree: 'certificate',
//             major: 'web development specialist',
//           },
//           {
//             school: 'San Jose State University',
//             graduationYear: 2003,
//             degree: 'bachelors',
//             major: 'Film/TV',
//           }
//         ],
//         experience: [
//           {
//             company: 'Freelance Web Developer',
//             fromDate: '2016-01-01',
//             toDate: '2021-08-14',
//             title: 'Freelance Web Developer',
//             workDone: 'Freelance web design, development, and maintenance for local artists including: page layout, UI/UX design, responsive design, responsive menu, interactive features, and dynamic user experience. Clients have included: CALAHAN - www.calahanmusic.com; ROKTOY - www.roktoy.com (wix); DRUNKINTHEGARAGE - https://drunkinthegarage.netlify.app/'
//           },
//           {
//             company: 'Pacific Road USA',
//             fromDate: '2004-04-05', 
//             toDate: '2020-05-07', 
//             title: 'Coordinator/Destination Manager', 
//             workDone: 'Design and management of custom educational experiences for international students including: Curriculum design & development; coordination of instructors & interpreters; management of logistics, materials, budget, and emergency  preparedness; domestic and international communication & coordination between hotels, group leaders, schools, and location representatives Web design and maintenance - WordPress; Database creation & maintenance (MS Access/Excel)' 
//           }
//         ],
//         certification: [
//           {certification: 'Scrimba UI Design Bootcamp', dateCertified: '2021-08-12'}
//         ],
//       }
//     })
// })

// Perform a POST to the URL you constructed in Step 1.
// You will need to post a properly formatted JSON message.
// The key to your JSON body is application
// You will also need to pass in all required headers.


// You will need to use Basic Authentication using the firstName value as the username and lastName value as the password AND "MKP-Authorization" as the header instead of just "Authorization"

// headers.set('MKP-Authorization', 'Basic ' + base64.encode("Brannon" + ":" + "Lee"));

// const application = {
//   isTest: true,
//   positionId: 'a0M4O00000qoC6UUAU',
//   firstName: 'Brannon',
//   lastName: 'Lee',
//   email: 'brannon.lee@yahoo.com',
//   phone: '650-773-7229',
//   zipcode: '90291',
//   describeYourself: 'Junior web developer with practical experience in website development, and fifteen years’ experience in       client relations looking to use my training in HTML, CSS, and JavaScript to develop engaging and userfocused web experiences that clearly communicate through digital content.',
//   ool: [
//     { languageName: 'javascript', proficiency: 8 }
//   ],
//   education: [
//     {
//       school: 'Santa Monica College',
//       graduationYear: 2019,
//       degree: 'certificate',
//       major: 'web development specialist',
//     },
//     {
//       school: 'San Jose State University',
//       graduationYear: 2003,
//       degree: 'bachelors',
//       major: 'Film/TV',
//     }
//   ],
//   experience: [
//     {
//       company: 'Freelance Web Developer',
//       fromDate: '2016-01-01',
//       toDate: '2021-08-14',
//       title: 'Freelance Web Developer',
//       workDone: 'Freelance web design, development, and maintenance for local artists including: page layout, UI/UX design, responsive design, responsive menu, interactive features, and dynamic user experience. Clients have included: CALAHAN - www.calahanmusic.com; ROKTOY - www.roktoy.com (wix); DRUNKINTHEGARAGE - https://drunkinthegarage.netlify.app/'
//     },
//     {
//       company: 'Pacific Road USA',
//       fromDate: '2004-04-05', 
//       toDate: '2020-05-07', 
//       title: 'Coordinator/Destination Manager', 
//       workDone: 'Design and management of custom educational experiences for international students including: Curriculum design & development; coordination of instructors & interpreters; management of logistics, materials, budget, and emergency  preparedness; domestic and international communication & coordination between hotels, group leaders, schools, and location representatives Web design and maintenance - WordPress; Database creation & maintenance (MS Access/Excel)' 
//     }
//   ],
//   certification: [
//     {certification: 'Scrimba UI Design Bootcamp', dateCertified: '2021-08-12'}
//   ],
// }

// const options = {
//   method: "POST",
//   body: JSON.stringify(application),
//   headers: {
//       "Content-Type": "application/json",
//       "MKP-Authorization": { username: "Brannon", password: "Lee" }
//   }
// }

// fetch("https://mkpartners.secure.force.com/services/apexrest/careers?positionId=a0M4O00000qoC6UUAU&firstName=Brannon&lastName=Lee&email=brannon.lee@yahoo.com", options)
//   .then(res => res.json())
//   .then(data => console.log(data))
// getInfo();