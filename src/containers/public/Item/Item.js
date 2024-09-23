import React, { useState } from "react";
import styles from "./Item.module.scss";
import classNames from "classnames/bind";
import icons from "../../../utils/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { formatVietnameseToString } from "../../../utils/common/common";

const { faStar, BsBookmarkStarFill, BsHeart, BsHeartFill } = icons;

const cx = classNames.bind(styles);

const thumbnails = [
  "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/07/10/inshot-20240710-223238669_1720625586.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/07/10/inshot-20240710-223238669_1720625586.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/07/10/z5621409053125-ad742633d8a8e59b99d0ed79af670a50_1720625352.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/07/02/1i1jr08ia-85svmp_1719934128.jpg",
];

const Item = ({
  images,
  user,
  title,
  star,
  description,
  attribute,
  address,
  id
}) => {
  const [isMouseHeart, setIsMouseHeart] = useState(false);

  const handleStar = (star) => {
    let stars = []
    for(let i=1; i<=+star; i++){
      stars.push(<FontAwesomeIcon
        icon={faStar}
        className={cx("item-content_icon")}
      />)
    }

    return stars
  }

  return (
    <div className={cx("item-row")}>
      <Link to={`chi-tiet/${formatVietnameseToString(title)}/${id}`} className={cx("item-images")}>
        <img
          src={thumbnails[0]}
          alt="preview"
          className={cx("item-thumbnail")}
        />
        <img
          src={thumbnails[1]}
          alt="preview"
          className={cx("item-thumbnail")}
        />
        <img
          src={thumbnails[2]}
          alt="preview"
          className={cx("item-thumbnail")}
        />
        <img
          src={thumbnails[3]}
          alt="preview"
          className={cx("item-thumbnail")}
        />
        <span
          className={cx("item-heart")}
          onMouseEnter={() => setIsMouseHeart(true)}
          onMouseLeave={() => setIsMouseHeart(false)}
        >
          {isMouseHeart ? (
            <BsHeartFill className={cx("item-heart__enter")} />
          ) : (
            <BsHeart className={cx("item-heart__leave")} />
          )}
        </span>
      </Link>
      <div className={cx("item-content")}>
        <div className={cx("item-content_row")}>
          <h3 className={cx("item-content_heading")}>
            <div className={cx("item-content_icons")}>
              {handleStar.length > 0 
                &&
                handleStar(+star).map((el, index) => (
                  <span key={index}>{el}</span>
                ))
              }
            </div>
            <span className={cx("line-clamp", "line-2")}>{title}</span>
          </h3>
          <div>
            <BsBookmarkStarFill size={17} color="orange" />
          </div>
        </div>
        <div className={cx("item-content_row")}>
          <div className={cx("item-content_infor")}>
            <span className={cx("item-content_price")}>{attribute?.price}</span>
            <span className={cx("item-content_acreage")}>
              {attribute?.acreage}
            </span>
            <span className={cx("item-content_area")}>{address}</span>
          </div>
          <div className={cx("item-content_time")}>
            <span>3 giờ trước</span>
          </div>
        </div>
        <p className={cx("item-content_desc", "line-clamp", "line-3")}>
          {description}
        </p>
        <div className={cx("item-content_row")}>
          <div className={cx("item-content_personal")}>
            <img
              src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2022/05/23/anh-2-1-590x308_1653278194.jpg"
              alt="avatar"
              className={cx("item-content_avatar")}
            />
            <span className={cx("item-content_name")}>{user?.name}</span>
          </div>
          <div className={cx("item-content_contact")}>
            <span className={cx("item-content_phone")}>Gọi {user?.phone}</span>
            <span className={cx("item-content_zalo")}>Nhắn Zalo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;