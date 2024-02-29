import classes from "./Landingpage.module.css";

export default function Landingpage() {
	return (
		<div className={classes.header}>
			<div className={classes.heroimg}>
                <div className={classes.herotext}>
				<h1>Spacerek.pl</h1>
				<h2>SPACERUJ ZE SWOIM MALUCHEM ZDROWO I BEZPIECZNIE</h2>
                </div>
			<div className={classes.heroimg_shadow}></div>
			</div>
		</div>
	);
}
