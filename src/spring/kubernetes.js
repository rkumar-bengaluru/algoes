import { useEffect, useState } from "react";

const Kurbernetes = () => {
    const getNestedHeadings = (headingElements) => {
        const nestedHeadings = [];
      
        headingElements.forEach((heading, index) => {
          const { innerText: title, id } = heading;
          console.log('---ssssssssssss-------');
          if (heading.nodeName === "h2") {
            nestedHeadings.push({ id, title, items: [] });
          } else if (heading.nodeName === "h3" && nestedHeadings.length > 0) {
            nestedHeadings[nestedHeadings.length - 1].items.push({
              id,
              title,
            });
          }
        });
      
        return nestedHeadings;
      };
    const getNestedDoc = (elements) => {
        console.log('---ssssssssssss-------');
        const nestedHeading = [];
        elements.forEach((e) => {
            const { innerText: title, id } = e;
            if (e.nodeName === 'h2') {
                nestedHeading.push({ id, title, items: [] });
            } else if (e.nodeName === 'H3' && nestedHeading.length > 0) {
                nestedHeading[nestedHeading.length - 1].items.push({ id, title });
            }
        });
        return nestedHeading;
    }
    const useHeadingsData = () => {
        const [nestedHeadings, setNestedHeadings] = useState([]);
      
        useEffect(() => {
          const headingElements = Array.from(
            document.querySelectorAll("h2, h3")
          );
          console.log('---ssssssssssss-------');
          const newNestedHeadings = getNestedHeadings(headingElements);
          setNestedHeadings(newNestedHeadings);
        }, []);
      
        return { nestedHeadings };
      };

    const useTableOfContent = () => {
        const [toc, setToc] = useState();
        console.log('----------');
        useEffect(() => {
            const tmp = Array.from(document.querySelectorAll('h2,h3'));
            console.log('----------' + tmp);
            const nestedToc = getNestedDoc(tmp);
            setToc(nestedToc);
            console.log('9999999999999999');
        }, []);
       
        return toc;
    }

    const TableOfContent = ({toc}) => {
        <ul>
            {toc.map( (heading) => {
                <li>
                    <a>{heading.title}</a>
                </li>
            })}
        </ul>
    }

    const [toc] = useHeadingsData();
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    <nav aria-label="Table of contents">
                        <TableOfContent toc={toc} />
                    </nav>
                </div>
                <div className="col-sm-9">
                    <h2>Kurbernetes</h2>
                </div>
            </div>
        </div>
    )
}
export default Kurbernetes;