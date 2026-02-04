function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-500",
    red: "border-red-500 bg-red-500",
    green: "border-green-500 bg-green-500",
    yellow: "border-yellow-500 bg-yellow-500",
    purple: "border-purple-500 bg-purple-500",
    orange: "border-orange-500 bg-orange-500",
    pink: "border-pink-500 bg-pink-500",
    teal: "border-teal-500 bg-teal-500",
  };
  return (
    <div className={`border-l-4 ${colorClasses[color]} rounded-lg shadow-md`}>
      {title && (
        <h3 className="text-xl font-bold mb-3 text-gray-600">{title}</h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

function Container({children, layout = 'vertical'}){
  const layoutClasses = {
    vertical: 'flex flex-col space-y-4',
    horizontal: 'flex flex-row flex-wrap gap-4',
    grid: 'grid grid-cols-1 md:grid-cols-2 gap-4',
  };
  return <div className={layoutClasses[layout]}>{children}</div>
  
}

function ChildrenProps() {
  return <section className="p-8 bg-white rounded-xl shadow-lg">
    <h2>Children Prop</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium distinctio expedita cum. Quaerat corrupti distinctio blanditiis.</p>
    <div className="space-y-6">
      <div>
        <h3>Card component with children</h3>
        <Container layout="grid">
          <Card title="User Profile" color="teal">
            <p className="mb-2">
              <strong>Name:</strong> Ashutosh Tiwari</p>
            <p className="mb-2">
              <strong>Email:</strong> Ashutosh@gmail.com</p>
            <p className="mb-2">
              <strong>Role:</strong> Developer</p>
          </Card>
          <Card title="Statistics" color="green">
            <p className="mb-2">
              <strong>Total Users:</strong> 16,258</p>
            <p className="mb-2">
              <strong>Active Session:</strong> 734</p>
            <p className="mb-2">
              <strong>Revenue:</strong> $777,000 </p>
          </Card>
          <Card title="Quick Action" color="purple">
            <button>Create New</button>
            <button >View All</button>
          </Card>
          <Card title="Warning" color="red">
            <p>Your trial period ends in 7 days. Please upgrade your account to continue using all features</p>
          </Card>
        </Container>
      </div>
    </div>
  </section>;
}

export default ChildrenProps;
