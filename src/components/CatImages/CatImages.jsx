import styles from "./CatImages.module.css";

const CatImages = ({source, setState}) => {
    const onClick = () => setState(source);

    return (
        <img src={source} alt="cat" onClick={onClick} className={styles.img} />
    )
}

export default CatImages;