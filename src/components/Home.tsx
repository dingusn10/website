import axios from 'axios'


export default function home() {
    axios({
    method: 'get',
    url: 'https://api.planningcenteronline.com/people/v2/people?where[membership]=elder',
    auth: {
      username: `${process.env.PCO_APP_ID}`,
      password: `${process.env.PCO_APP_SECRET}`
    },
    responseType: 'json'
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }) 
    .finally(function () {

    }) 
  


  return (
    <div className='overflow-hidden h-screen w-screen bg-gradient-to-br from-amber-900 to-neutral-700 bg-center bg-cover'>
        <div className='absolute top-0 bottom-0 right-0 left-0 bg-stone-900 opacity-70 h-screen w-screen'></div>
        <div>
            
        </div>
    </div>
  )
}
