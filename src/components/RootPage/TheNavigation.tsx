import { Dropdown } from 'react-bootstrap'; // Assuming you're using react-bootstrap
import Link from 'next/link'; // Assuming you're using Next.js
import { useRouter } from 'next/router';
import { navMenu } from '@/data/navbar';
type NavMenuItem = {
  id: string;
  title: string;
  type: string;
  path: string;
  head: string;
};

const Navigation = () => {
  const { asPath } = useRouter();
  const handlePath = (path: string) => {
    // Your logic here
  };

  const checkClickPath = ''; // Your logic to determine this

  const renderNavItems = (items: NavMenuItem[], parentPath: string = '') => {
    return items.map((item) => {
      const currentPath = parentPath + item.path;

      if (item.type === 'nav') {
        return (
          <Link key={item.id} href={currentPath} className={`nav-link ${asPath === currentPath ? "active" : ""}`}>
            <span>{item.title}</span>
          </Link>
        );
      } else if (item.type === 'dropdown') {
        const childItems = navMenu.filter(i => i.head === item.id);
        console.log("childItems : ",childItems); 
        
        return (
          <div id={item.title} className='' key={item.id}>
            <Dropdown.Toggle className={`nav-item nav-link ${asPath === currentPath ? "active" : ""}`} onClick={() => handlePath(currentPath)}>
              <span>{item.title}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu show={checkClickPath === currentPath}>
              {/* {renderNavItems(childItems, currentPath)} */}
            </Dropdown.Menu>
          </div>
        );
      }
      return null;
    });
  };

};



export default Navigation;
