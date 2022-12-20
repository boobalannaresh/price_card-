import logo from "./logo.svg";
import "./App.css";
import PriceCard from "./PriceCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css"

function App() {
  let priceCard= [
    {
      title: "Free",
      price: 0,
      currency : "$",
      period : "month",
      features: [
        {
       name: "Single User",
       isEnable : true
      },
      {
        name: "5GB Storage",
        isEnable : true
       },
       {
        name: "Unlimited Public Project",
        isEnable : true
       },
       {
        name: "Community Access",
        isEnable : true
       },
       {
        name: "Unlimited Private Projects",
        isEnable : false
       },
       {
        name: "Dedicated Phone Support",
        isEnable : false
       },
       {
        name: "Free Subdomain",
        isEnable : false
       },
       {
        name: "Monthly Status Reports",
        isEnable : false
       },

    ],
    },
    {
      title: "Plus",
      price: 9,
      currency : "$",
      period : "month",
      features : [
        {
            name: "5 User",
            isEnable : true,
            isBold : true
            
           },
           {
             name: "50GB Storage",
             isEnable : true
            },
       

        {
            name: "Unlimited Public Project",
            isEnable : true    
        },

        {
            name: "Community Access",
            isEnable : true    
        },

        {
            name: "Unlimited Private Projects",
            isEnable : true    
        },
        {
            name: "Dedicated Phone Support",
            isEnable : true    
        },
        {
            name: "Free Subdomain",
            isEnable : true    
        },
        {
            name: "Monthly Status Reports",
            isEnable : false   
        },
      ]
    },
    {
      title: "Pro",
      price: 49,
      currency : "$",
      period : "month",
      features : [
        {
            name: "Unlimited Users ",
            isEnable : true,
            isBold : true 
        },
        {
            name: "150GB Storage",
            isEnable : true
        },
        {
            name: "Unlimited Public Project ",
            isEnable : true
        },
        {
            name: "Community Access",
            isEnable : true
        },
        {
            name: "Unlimited Private Projects",
            isEnable : true
        },
        {
            name: "Dedicated Phone Support ",
            isEnable : true,
            
        },
        {
            name: [<strong>Unlimited</strong>, " ","Free Subdomain "],
            isEnable : true
        },
        {
            name: "Monthly Status Reports",
            isEnable : true
        },
      ]
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {priceCard.map((card) => {
            return <PriceCard data={card}></PriceCard>;
          })
          }
        </div>
      </div>
    </section>
  );
}

export default App;