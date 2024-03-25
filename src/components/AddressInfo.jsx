import React from "react";
import style from "../style_modules/component_module/addressinfo.module.css";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

function AddressInfo(props) {
    return (
        <section className={style.addressContainer}>
            <span className={style.addressHeader}>{props.addressHeader}</span>
            <div className={style.addressNameContainer}>
                {props.descList.map((list) => {
                    return (
                        <div className={style.address} key={list.key}>{list.desc}</div>
                    )
                })}
            </div>
        </section>
    )
}
AddressInfo.propTypes = {
    addressHeader: PropTypes.string.isRequired,
    descList: PropTypes.array.isRequired,
}
AddressInfo.defaultProps = {
    addressHeader: "Test Header",
    descList: [{ desc: "This is test data", key: uuidv4() }]
}
export default AddressInfo;