import React from 'react'

const Article01 = () => {

  const heading='RR vs KKR Live Streaming channels: Match, toss time Rajasthan Royals vs Kolkata Knight Riders match live telecast online details';
  const imgurl='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1BH2Wy.img?w=768&h=403&m=6&x=183&y=133&s=829&d=130';
  const paracontent='For viewers in the USA, the match will be available on Willow TV, the official IPL broadcaster. Fans can watch the match live on TV or stream it online via the Willow TV app or website, which provides expert commentary and match highlights.';


  const userdetails={
    name:'Shiva Sai',
    age:23,
    photo:'',
    occupation:'Developer',
    skills:['JavaScript','React','Angular']
  }

  const fruits=['Apple','Banana','Orange'];


  function printuserdetails(user){
      return `User Name: ${user.name} and the Age: ${user.age}`;
  }

  const styles={
    headinglevel1:{
      color:'red',
      backgroundColor:'yellow',
      fontSize:'30px'
    },
    para:{
      color:'blue',
      fontSize:'12px',
      padding:'20px',
      backgroundColor:'lightgray'
    },
    list:{
      color:'green'
    }
  }

  return (
    <div>

    <h1 style={styles.headinglevel1}>{printuserdetails(userdetails)}</h1>

      <h2>Print Fruits</h2>
      <ol>
        {fruits.map((fruit,index)=>
        <li key={index} style={styles.list}>{fruit}</li>
        )}
      </ol>

    <h2>User Details</h2>
    <h3>User Name: {userdetails.name}</h3>
    <p>Age: {userdetails.age}</p>
    <p>Occupation: {userdetails.occupation}</p>
    <p>Skills: {userdetails.skills.map((skill, index)=><li key={index}>{skill}</li>)}</p>

       <h1>Welcome to Article One</h1>
       <h3>{heading}</h3>
      <img src={imgurl} alt=''/>
      <p style={styles.para}>{paracontent}</p>

    </div>
  )
}

export default Article01