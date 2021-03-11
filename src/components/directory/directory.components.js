import React from 'react';
import MenuItem from '../menu-item/menu-item.components'
import '../directory/directory.styles.scss';
import { connect } from 'react-redux';

class Directory extends React.Component {


    render() {
        return (
            <div className='directory-menu'>
                {
                    this.props.sections.map(section => {
                        return <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl} />
                    })
                }
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return { sections: state.directory.sections }
}
export default connect(mapStateToProps)(Directory);