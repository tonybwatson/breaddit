import React from 'react'
import { Card } from 'react-bootstrap'

export default function SidebarUnauth() {
    return (
        <div>
            <Card className="bg-dark text-white border-white">
                <h4 className="m-3">
                    Sign in or create an account to make new subreaddits, post, comment, and to upvote or downvote content!
                    </h4>
            </Card>
        </div>
    )
}
