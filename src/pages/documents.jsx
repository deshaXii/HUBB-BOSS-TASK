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
                <div className="file-box documents">
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
                <div className="file-box google_drive">
                  <div className="file-box__icon">
                    <IoMdDocument />
                  </div>
                  <div className="file-box__title">
                    <h6>Documents</h6>
                  </div>
                  <div className="file-box__bottom">
                    <div className="file-box__bar">
                      <span style={{ width: "30%" }}></span>
                    </div>
                    <div className="file-box__info">
                      <span className="files-count">1,328 Files</span>
                      <span className="files-size">1.3GB</span>
                    </div>
                  </div>
                </div>
                <div className="file-box one_drive">
                  <div className="file-box__icon">
                    <IoMdDocument />
                  </div>
                  <div className="file-box__title">
                    <h6>Documents</h6>
                  </div>
                  <div className="file-box__bottom">
                    <div className="file-box__bar">
                      <span style={{ width: "75%" }}></span>
                    </div>
                    <div className="file-box__info">
                      <span className="files-count">1,328 Files</span>
                      <span className="files-size">1.3GB</span>
                    </div>
                  </div>
                </div>
                <div className="file-box dropbox">
                  <div className="file-box__icon">
                    <IoMdDocument />
                  </div>
                  <div className="file-box__title">
                    <h6>Documents</h6>
                  </div>
                  <div className="file-box__bottom">
                    <div className="file-box__bar">
                      <span style={{ width: "50%" }}></span>
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
            <section className="storage-details">
              <div className="storage-details-header">
                <h5>Storage Details</h5>
              </div>
              <div className="storage-body">
                <div className="storage-body__chart"></div>
                <div className="storage-body__info">
                  <div className="storage-body__info-item documents">
                    <div className="sbit">
                      <div className="sbit-icon">
                        <IoMdDocument />
                      </div>
                      <div className="sbit-info">
                        <h6>Documents Files</h6>
                        <span>1,328 files</span>
                      </div>
                    </div>
                    <span className="size">1.3GB</span>
                  </div>
                  <div className="storage-body__info-item media">
                    <div className="sbit">
                      <div className="sbit-icon">
                        <IoMdDocument />
                      </div>
                      <div className="sbit-info">
                        <h6>Media Files</h6>
                        <span>1,328 files</span>
                      </div>
                    </div>
                    <span className="size">15.1GB</span>
                  </div>
                  <div className="storage-body__info-item other">
                    <div className="sbit">
                      <div className="sbit-icon">
                        <IoMdDocument />
                      </div>
                      <div className="sbit-info">
                        <h6>Other Files</h6>
                        <span>1,328 files</span>
                      </div>
                    </div>
                    <span className="size">12.7GB</span>
                  </div>
                  <div className="storage-body__info-item unknown">
                    <div className="sbit">
                      <div className="sbit-icon">
                        <IoMdDocument />
                      </div>
                      <div className="sbit-info">
                        <h6>Unknown</h6>
                        <span>428 files</span>
                      </div>
                    </div>
                    <span className="size">1.3GB</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Default>
  );
}

export default Documents;
