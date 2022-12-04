import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Tints = () => {
  const data = useStaticQuery(graphql`
    {
      allDesignTokenJson {
        edges {
          node {
            tints {
              mapValue {
                name
                compiledValue
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="css-14m39zm">
      <table aria-hidden="false" className="docblock-argstable css-tm6i3o">
        <thead className="docblock-argstable-head">
          <tr>
            <th>
              <span>Token</span>
            </th>
            <th>
              <span>Value</span>
            </th>
            <th>
              <span>Preview</span>
            </th>
          </tr>
        </thead>
        <tbody className="docblock-argstable-body">
          {/*  For each table row */}
          {data.allDesignTokenJson.edges.node.tints.map((nodes) =>
            nodes.mapValue.map((node, index) => (
              <tr key={index}>
                <td className="css-4lbn0a">
                  <span
                    className="css-in3yi3"
                    style={{
                      textTransform: "lowercase",
                      fontSize: "16px",
                    }}
                  >
                    {node.name}
                  </span>
                </td>
                <td>
                  <div className="css-fimcbu">
                    <div className="css-13nzt7e">
                      <span className="css-ks2jcn">{node.compiledValue}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="css-13nzt7e">
                    <span className="css-ks2jcn">
                      <div
                        style={{
                          position: "relative",
                          height: "33px",
                          width: "33px",
                          margin: "2px 4px",
                          border: "#000013 2px solid",
                          borderRadius: "50px",
                          background: "#ffd700",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            margin: "0",
                            border: "transparent 2px solid",
                            borderRadius: "50px",
                            background: "#fff",
                            opacity: `${node.compiledValue}`,
                          }}
                        ></div>
                      </div>
                    </span>
                  </div>
                </td>
              </tr>
            ))
          )}
          {/* / For each table row */}
        </tbody>
      </table>
    </div>
  )
}

export default Tints
