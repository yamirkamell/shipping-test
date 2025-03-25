const Home = () => {

  return (
    <div style={{ display: 'flex', flexDirection: "row" }}>
       HOME
       <a onClick={()=> { localStorage.removeItem('token')} }> Log out </a>
    </div>
  );
}

export default Home;