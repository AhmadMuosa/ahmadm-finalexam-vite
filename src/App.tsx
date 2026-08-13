import { Routes, Route, Link } from 'react-router-dom'
import { EXAM_INFO } from './data'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

function Header() {
  return (
    <header style={{
      backgroundColor: '#blue',
      color: '#black',
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '0 0 8px 8px',
      marginBottom: '20px'
    }}>
      <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>{EXAM_INFO.title}</h2>
      <span style={{ fontSize: '16px', opacity: 0.9 }}>{EXAM_INFO.studentName}</span>
    </header>
  );
}

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#blue",
        borderTop: "1px solid #red",
        padding: "16px",
        textAlign: "center",
        marginTop: "40px",
        borderRadius: "8px 8px 0 0",
        color: "#purple",
      }}
    >
      <p style={{ margin: 0, fontWeight: "600" }}>{EXAM_INFO.college}</p>
      <p style={{ margin: "4px 0 0 0", fontSize: "14px" }}>
        {EXAM_INFO.courseName}
      </p>
    </footer>
  )
}

function HomePage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          fontWeight: "bold",
          color: "darkorange",
          fontSize: "30px",
          marginBottom: "16px",
        }}
      >
        Welcome to Home Page
      </h1>

      <Card style={{ marginBottom: "24px", overflow: "hidden" }}>
        <CardContent
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/college.jpg"
            alt="Sheridan College"
            style={{
              maxWidth: "100%",
              maxHeight: "300px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          />
          <p style={{ color: "#purple", fontSize: "16px" }}>
            Welcome to the main homepage.
          </p>
        </CardContent>
      </Card>

      <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
        <Link to="/events">
          <Button>Go to Events Page</Button>
        </Link>
        <Link to="/table">
          <Button variant="outline">Go to Data Table Page</Button>
        </Link>
      </div>
    </div>
  )
}

function EventsPage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          fontWeight: "bold",
          color: "darkorange",
          fontSize: "30px",
          marginBottom: "16px",
        }}
      >
        Events & Handling Page
      </h1>

      <Card style={{ marginBottom: "24px" }}>
        <CardContent style={{ padding: "20px" }}>
          <p style={{ color: "#lightblue", fontSize: "16px" }}>
            This is the Events Page.
          </p>
        </CardContent>
      </Card>

      <Link to="/">
        <Button variant="secondary">Back to Home Page</Button>
      </Link>
    </div>
  )
}

function DataTablePage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          fontWeight: "bold",
          color: "darkorange",
          fontSize: "30px",
          marginBottom: "16px",
        }}
      >
        Data Table & Records Page
      </h1>

      <Card style={{ marginBottom: "24px" }}>
        <CardContent style={{ padding: "20px" }}>
          <p style={{ color: "#red", fontSize: "16px" }}>
            This is the Data Table Page.
          </p>
        </CardContent>
      </Card>

      <Link to="/">
        <Button variant="secondary">Back to Home Page</Button>
      </Link>
    </div>
  )
}

function App() {
  return (
    <div
      style={{
        maxWidth: "650px",
        margin: "0 auto",
        padding: "0 16px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/table" element={<DataTablePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
export default App