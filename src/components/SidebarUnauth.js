import React from 'react'
import { Card } from 'react-bootstrap'

export default function SidebarUnauth() {
    return (
        <div>
            <Card className="bg-dark text-white border-white">
                <h4 className="m-3">
                    Create an account to make new subreaddits, posts, comments, upvote or downvote content, and save favorite subreaddits!
                    </h4>
            </Card>
        </div>
    )
}
