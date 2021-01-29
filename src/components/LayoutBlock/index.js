import l from './style.module.css';


const AppLayout = ({ id, title, urlBg, colorBg, children }) => {
    const style = {};
    if (urlBg) { style.backgroundImage = `url(${urlBg})` }
    if (colorBg) { style.backgroundColor = colorBg }
    
    return (
        <section className={l.root } id={ id } style={style}>
            <div className={ l.wrapper }>
                <article>
                    <div className={ l.title }>
                        <h3>{ title }</h3>
                        <span className={ l.separator }></span>
                    </div>
                    <div className={ l.desc + " " + l.full }>
                        { children }
                    </div>
                </article>
            </div>
        </section>
    );
}

export default AppLayout;