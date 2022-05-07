import React from 'react'

function Admin() {
    return (
        <form>
            <label for="heading">Heading</label>
            <input type="text" id="heading" name="heading" /> <br />
            <label for="abstract">Abstract</label>
            <input type="text" id="abstract" name="abstract" /> <br />
            <label for="thumbnail">Thumbnail</label>
            <input
                type="file"
                id="thumbnail"
                name="thumbnail"
                accept="image/*"
            />
            <br />
            <label for="content">Content</label>
            <textarea name='content'></textarea>
        </form>
    )
}

export default Admin
