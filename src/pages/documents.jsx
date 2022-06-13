import Default from "../layouts/default";
import { MdAdd } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";

function Documents() {
  return (
    <Default>
      <div className="documents-page">
        <div className="documents-page-layout">
          <div className="documents-page-layout__left">
            <section className="my-files">
              <div className="my-files-header">
                <h5>My Files</h5>
                <button type="button">
                  <MdAdd />
                  <span>Add New</span>
                </button>
              </div>
              <div className="my-files-body">
                <div className="file-box">
                  <div className="file-box__icon">
                    <IoMdDocument />
                  </div>
                  <div className="file-box__title">
                    <h6>Documents</h6>
                  </div>
                  <div className="file-box__bottom">
                    <div className="file-box__bar">
                      <span style={{ width: "60%" }}></span>
                    </div>
                    <div className="file-box__info">
                      <span className="files-count">1,328 Files</span>
                      <span className="files-size">1.3GB</span>
                    </div>
                  </div>
                </div>
                <div className="file-box">
                  <div className="file-box__icon">
                    <IoMdDocument />
                  </div>
                  <div className="file-box__title">
                    <h6>Documents</h6>
                  </div>
                  <div className="file-box__bottom">
                    <div className="file-box__bar">
                      <span style={{ width: "60%" }}></span>
                    </div>
                    <div className="file-box__info">
                      <span className="files-count">1,328 Files</span>
                      <span className="files-size">1.3GB</span>
                    </div>
                  </div>
                </div>
                <div className="file-box">
                  <div className="file-box__icon">
                    <IoMdDocument />
                  </div>
                  <div className="file-box__title">
                    <h6>Documents</h6>
                  </div>
                  <div className="file-box__bottom">
                    <div className="file-box__bar">
                      <span style={{ width: "60%" }}></span>
                    </div>
                    <div className="file-box__info">
                      <span className="files-count">1,328 Files</span>
                      <span className="files-size">1.3GB</span>
                    </div>
                  </div>
                </div>
                <div className="file-box">
                  <div className="file-box__icon">
                    <IoMdDocument />
                  </div>
                  <div className="file-box__title">
                    <h6>Documents</h6>
                  </div>
                  <div className="file-box__bottom">
                    <div className="file-box__bar">
                      <span style={{ width: "60%" }}></span>
                    </div>
                    <div className="file-box__info">
                      <span className="files-count">1,328 Files</span>
                      <span className="files-size">1.3GB</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="documents-page-layout__right">
            <section className="storage-details">storage</section>
          </div>
        </div>
      </div>
    </Default>
  );
}

export default Documents;
