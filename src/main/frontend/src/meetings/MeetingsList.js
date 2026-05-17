import {useState} from "react";

export default function MeetingsList({meetings,onDelete}) {
    return (
        <table>
            <thead>
            <tr><th>Id spotkania</th>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Akcje</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.id}</td>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>
                    <td><button className="button button-outline" onClick={() => onDelete(meeting)}>Usun</button></td>
                </tr>)
            }
            </tbody>
        </table>
    );
}
