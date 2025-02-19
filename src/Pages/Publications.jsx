import React, { useEffect, useState, useRef } from 'react';

import allpubs from '../data/pubs/allpubs';
import { Select } from 'antd';

import { IoMdDownload } from 'react-icons/io';
import { TfiNewWindow } from 'react-icons/tfi';

import { Input } from 'antd';
const { Search } = Input;

import { Pagination } from 'antd';

const Publications = () => {
  const [defaultAllPubs, setDefaultAllPubs] = useState(allpubs);
  const [toShowPubs, setToShowPubs] = useState(null);

  const [dimAllDiv, setDimAllDiv] = useState(false);

  const [totalNumOfPubs, setTotalNumOfPubs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const myRef = useRef(null);

  // returns correct number of items in the page
  const renderPage = (pagenumber, itemperpage, filtrdPaper) => {
    // count total number of publications
    const totalNum = filtrdPaper.reduce((acc, yearGroup) => acc + yearGroup.papers.length, 0);
    setTotalNumOfPubs(totalNum);

    const startIndex = (pagenumber - 1) * itemperpage;
    const endIndex = startIndex + itemperpage;

    let currentCount = 0;
    const paginatedPubs = [];

    for (const yearGroup of filtrdPaper) {
      const filteredPapers = [];
      for (const paper of yearGroup.papers) {
        if (currentCount >= startIndex && currentCount < endIndex) {
          filteredPapers.push(paper);
        }
        currentCount++;
      }
      if (filteredPapers.length > 0) {
        paginatedPubs.push({
          ...yearGroup,
          papers: filteredPapers
        });
      }
    }
    setToShowPubs(paginatedPubs);
  };

  useEffect(() => {
    if (!toShowPubs) {
      renderPage(1, 10, allpubs);
    }
    // apply the css element here
    const style = document.createElement('style');
    style.innerHTML = `
      nav {
        padding: 4px 0;
        border-bottom: 1px solid #dedee3;
        backdrop-filter: blur(8px);
        background-color: rgba(26, 27, 25, .29);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // produce options for search from allpubs
  const searchOptions = allpubs.map((yearGroup) => ({
    label: yearGroup.year,
    value: yearGroup.year
  }));

  const handleSearchChange = (e) => {
    const searchVal = e.target.value;
    const filteredPubs = allpubs
      .map((yearGroup) => ({
        ...yearGroup,
        papers: yearGroup.papers.filter((paper) => paper.title.toLowerCase().includes(searchVal.toLowerCase()))
      }))
      .filter((yearGroup) => yearGroup.papers.length > 0);

    setDefaultAllPubs(filteredPubs);
    renderPage(1, itemsPerPage, filteredPubs);
  };

  // filter option: year
  const handleYearChange = (year) => {
    setDimAllDiv(true);
    myRef.current.scrollIntoView({ behavior: 'smooth' });
    if (year === undefined) {
      return;
    }
    const filteredPubs = allpubs.filter((yearGroup) => yearGroup.year === year);
    setDefaultAllPubs(filteredPubs);
    setCurrentPage(1);
    setTimeout(() => {
      setDimAllDiv(false);
      renderPage(1, itemsPerPage, filteredPubs);
    }, 500);
  };

  // for pagination
  const onChangePageNum = (page) => {
    setDimAllDiv(true);
    myRef.current.scrollIntoView({ behavior: 'smooth' });
    if (page === currentPage) return;
    setTimeout(() => {
      setDimAllDiv(false);
      renderPage(page, itemsPerPage, defaultAllPubs);
    }, 1000);
    setCurrentPage(page);
  };

  const onNumberPerPageChange = (current, size) => {
    setItemsPerPage(size);
    setCurrentPage(1);
    setTimeout(() => {
      setDimAllDiv(false);
      renderPage(1, size, defaultAllPubs);
    }, 1000);
  };

  // return
  return (
    <div className="pub-body-all">
      <div className="container joinusbg height1vh">
        <div className="row">
          <div className="pubHeader">
            <h4>RESEARCH</h4>
            <p className="headtextpub">Publications</p>
            <p className="smallertexts">
              Dive into our extensive research tackling some of the most fascinating challenges of AI, <br />
              and discover the innovative solutions we're developing.
            </p>
            <div className="putitcenter">
              <div
                className="searchbar"
                ref={myRef}>
                <Search
                  placeholder="input search text"
                  onChange={handleSearchChange}
                  enterButton
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container displayrelup">
        <div className="row">
          <div className="pubmainbody">
            <div className="pub-mb-left-filter">
              <h2 className="pub-year-title">Filter by</h2>
              <div className="pub-single-item">
                <p className="marginbottomsome">Publication year</p>
                <Select
                  showSearch
                  style={{ width: '100%', maxWidth: '200px', display: 'block' }}
                  onChange={handleYearChange}
                  placeholder="All Years"
                  options={searchOptions}
                />
                <p
                  className="downloadPdf somemarginTop"
                  onClick={() => {
                    setDimAllDiv(true);
                    myRef.current.scrollIntoView({ behavior: 'smooth' });
                    setDefaultAllPubs(allpubs);
                    setCurrentPage(1);
                    setTimeout(() => {
                      setDimAllDiv(false);
                      renderPage(1, itemsPerPage, allpubs);
                    }, 800);
                  }}>
                  Clear
                </p>
              </div>
            </div>

            <div className={`pub-mb-right ${dimAllDiv ? 'dimthediv' : ''}`}>
              {toShowPubs &&
                toShowPubs.map((pubyear, index1) => (
                  <div key={index1}>
                    <h2 className="pub-year-title">{pubyear.year}</h2>

                    {pubyear.papers.map((pub, index) => (
                      <div
                        key={index}
                        className="pub-single-item">
                        <p className="pub-title">{pub.title}</p>
                        <p className="pub-authors">{pub.authors}</p>
                        <p className="pub-venue">
                          {pub.venue}, {pub.year}
                        </p>
                        {/* <p>{pub.type}</p> */}
                        <div>
                          <a
                            href={pub.download}
                            className="downloadPdf">
                            {' '}
                            <div>
                              {' '}
                              <span>Download Pdf</span>
                              <IoMdDownload />{' '}
                            </div>
                          </a>
                          <a
                            href={pub.link}
                            target="_blank"
                            className="downloadPdf">
                            {' '}
                            <span>Link</span> <TfiNewWindow />
                          </a>
                        </div>
                      </div>
                    ))}

                    <br />
                  </div>
                ))}

              {!toShowPubs && <p className="customnopub">No publications found</p>}

              {toShowPubs && (
                <Pagination
                  align="center"
                  showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                  showSizeChanger
                  onShowSizeChange={onNumberPerPageChange}
                  onChange={onChangePageNum}
                  defaultCurrent={1}
                  total={totalNumOfPubs}
                />
              )}
            </div>
          </div>

          {/* row ends here  */}
        </div>
      </div>
    </div>
  );
};

export default Publications;
