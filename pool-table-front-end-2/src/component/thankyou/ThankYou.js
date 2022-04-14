




function ThankYou(){
    return(
      <div className = 'background-1'>
<body className="d-flex h-100 text-center text-white bg-dark">
    
    <div className="thank-you-container cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">
        <div>
        </div>
      </header>
    
      <main className="px-3">
        <h1>Thank you for joining!</h1>
        <p className="lead">You'll recieve a confirmation email with more information.</p>
        <p className="lead">
          <a href="/profile" className="btn btn-lg btn-secondary fw-bold border-white bg-black">View Profile</a>
        </p>
      </main>
    
      <footer className="mt-auto text-white-50">
        <p><a href="/terms-and-conditions" className="text-white">View member agreement here</a></p>
      </footer>
    </div>
    
    
    
        
      </body>
      </div>
    )
}

export default ThankYou