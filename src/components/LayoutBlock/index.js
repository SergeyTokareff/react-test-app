import l from './style.module.css';


const AppLayout = ({ id, title, desc, urlBg, colorBg }) => {
    const style = {backgroundImage: `url(${urlBg})`,
                    backgroundColor: `${colorBg}`};
    
    return (
        <section className={l.root } id={ id } style={style}>
            <div className={ l.wrapper }>
                <article>
                    <div className={ l.title }>
                        <h3>{ title }</h3>
                        <span className={ l.separator }></span>
                    </div>
                    <div className={ l.desc + " " + l.full }>
                        <p>{ desc }</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default AppLayout;