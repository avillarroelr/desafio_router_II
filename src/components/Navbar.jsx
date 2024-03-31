import { NavLink } from "react-router-dom";
export default function Navbar() {
    // Generando Links Activos 
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    // Rnderizando Link
    return (
        <div className="menu">
            <div>
                <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/pokemon_go_icon_138275.png" className="pokeballIcon" alt="" />
            </div>
            <div className="itemsMenus">
                <NavLink className={setActiveClass} to="/">
                    Home
                </NavLink>
                <NavLink className={setActiveClass} to="pokemones">
                    Pokemones
                </NavLink>
            </div>

        </div>
    );
}
