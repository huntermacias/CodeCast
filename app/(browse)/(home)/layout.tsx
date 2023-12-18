import { Navbar } from "../_components/navbar";
import { Sidebar } from "../_components/sidebar";

const HomeLayout = ({
	children
}: {
	children: React.ReactNode
}) => {
	return ( 
		<>
			<div className="flex h-full pt-20">
				{children}
			</div>	
		</>
	 );
}
 
export default HomeLayout;

