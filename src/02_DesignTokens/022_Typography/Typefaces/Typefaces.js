import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Typefaces = () => {
    const data = useStaticQuery(graphql`
        query TypefacesQuery {
            designTokensJson(name: { eq: "$typefaces" }) {
                name
                mapValue {
                    name
                    compiledValue
                }
            }
        }
    `)

    const VariableName = data.designTokensJson.name // Variable name
    const Name = VariableName.substring(1) // Remove `$` from variable name
    const TokenName = Name.replace(/-/g, " ") // Replace hyphens `-` with space ` `

    const Title = {
        textTransform: "capitalize",
        marginTop: "80px",
        lineHeight: "1",
    }

    return (
        <section>
            <h3 style={Title}>{TokenName}</h3>
            <p>Description.</p>

            <div
                style={{
                    marginBottom: "-20px",
                }}
            >
                {data.designTokensJson.mapValue.map(node => (
                    <p
                        style={{
                            fontFamily: `${node.compiledValue}`,
                            fontWeight: 700,
                            fontSize: "2.5rem",
                            lineHeight: 1,
                        }}
                    >
                        {node.compiledValue}
                        <span
                            style={{
                                fontFamily:
                                    "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
                                fontSize: "1.125rem",
                                marginLeft: "14px",
                            }}
                        >
                            typeface({node.name})
                        </span>
                    </p>
                ))}
            </div>

            <table
                className="docblock-argstable css-6hhrgj"
                style={{ textAlign: "left" }}
            >
                <thead className="docblock-argstable-head">
                    <tr>
                        <th>Token</th>
                        <th>Value</th>
                        <th>Default</th>
                        <th style={{ width: "50% !important" }}>Use</th>
                    </tr>
                </thead>
                <tbody className="docblock-argstable-body">
                    {data.designTokensJson.mapValue.map(node => (
                        <tr>
                            <td className="css-4lbn0a">
                                <span className="css-in3yi3">
                                    typeface({node.name})
                                </span>
                            </td>
                            <td>
                                <div className="css-1521b8c">
                                    <span>{node.compiledValue}</span>
                                </div>
                                <div className="css-fimcbu"></div>
                            </td>
                            <td style={{ width: "0" }}>
                                <span>-</span>
                            </td>
                            <td style={{ width: "50% !important" }}>
                                <pre style={{ margin: 0 }}>
                                    <code>
                                        font-family: typeface(
                                        {node.name});
                                    </code>
                                </pre>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Typefaces
