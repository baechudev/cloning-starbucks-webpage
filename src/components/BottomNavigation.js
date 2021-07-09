import "bootstrap/dist/css/bootstrap.min.css";
import "./BottomNavigation.css";

function BottomNavigation() {
  return (
    <div className="navi-bottom">
      <div className="navi-bottom-item">
        <h3>About Starbucks</h3>
        <ul>
          <li>
            <a href="https://www.starbucks.ca/about-us/our-heritage">
              Our Heritage
            </a>
          </li>
          <li>
            <a href="https://www.starbucks.ca/coffee">Our Coffee</a>
          </li>
          <li>
            <a href="https://stories.starbucks.ca/en/">Stories and News</a>
          </li>
          <li>
            <a href="https://investor.starbucks.com/">Investor Relations</a>
          </li>
          <li>
            <a href="https://www.starbucks.ca/responsibility/learn-more/policies">
              Policies and Standards
            </a>
          </li>
          <li>
            <a href="https://customerservice.starbucks.ca/">Customer Service</a>
          </li>
        </ul>
      </div>
      <div className="navi-bottom-item">
        <h3>Careers</h3>
        <ul>
          <li>
            <a href="https://www.starbucks.ca/careers/working-at-starbucks/culture-and-values">
              Culture and Values
            </a>
          </li>
          <li>
            <a href="https://www.starbucks.ca/responsibility/diversity">
              Diversity and Inclusion
            </a>
          </li>
          <li>
            <a href="https://www.starbucks.ca/careers/">Work at Starbucks</a>
          </li>
          <li>
            <a href="https://www.starbucks.ca/careers/find-a-job/corporate">
              Corporate Careers
            </a>
          </li>
          <li>
            <a href="https://www.starbucks.ca/careers/find-a-job/retail">
              Retail Careers
            </a>
          </li>
        </ul>
      </div>
      <div className="navi-bottom-item">
        <h3>Social Impact</h3>
        <ul>
          <li>
            <a href="https://www.starbucks.ca/responsibility">Overview</a>
          </li>
          <li>
            <a href="https://www.starbucks.ca/responsibility/sourcing">
              Ethical Sourcing
            </a>
          </li>
          <li>
            <a href="https://www.starbucks.ca/responsibility/environment">
              Environment
            </a>
          </li>
          <li>
            <a href="https://www.starbucks.ca/responsibility/community">
              Strengthening Communities
            </a>
          </li>
          <li>
            <a href="https://www.starbucks.ca/opportunity-youth">
              Opportunity Youth
            </a>
          </li>
        </ul>
      </div>
      <div className="navi-bottom-item">
        <h3>For Business Partners</h3>
        <ul>
          <li>
            <a href="https://www.starbuckscardb2b.com/">
              Corporate Gift Card Sales
            </a>
          </li>
          <li>
            <a href="https://solutions.starbucks.ca/">Branded Solutions</a>
          </li>
        </ul>
      </div>
      <div className="navi-bottom-item">
        <h3>Order and Pick</h3>
        <ul>
          <li>
            <a href="https://www.starbucks.ca/rewards/mobile-apps">
              Order on the App
            </a>
          </li>
          <li>
            <a href="https://www.starbucks.ca/menu">Order on the Web</a>
          </li>
          <li>
            <a href="https://www.starbucks.ca/delivery">Delivery</a>
          </li>
          <li>
            <a href="https://www.starbucks.ca/ways-to-order">
              Order and Pickup Options
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BottomNavigation;
