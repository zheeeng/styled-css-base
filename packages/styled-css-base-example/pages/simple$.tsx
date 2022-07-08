/**
 * @title Simple
 */

import './simple.scss'
import './simple.less'
import './simple.styl'
import { createDemoSet } from '../demo/demoSet'
import { useState } from 'react'

function Example () {
    const [preprocessor, setPreprocessor] = useState('scss(sass)')

    return (
        <div style={{ padding: 24 }}>
            <div className="showcase-scss">
                <label>
                    Your preferred preprocessor:
                    <select value={preprocessor} onChange={e => setPreprocessor(e.currentTarget.value)}>
                        <option value="scss(sass)">scss(sass)</option>
                        <option value="less">less</option>
                        <option value="less-on-css">less-on-css</option>
                        <option value="stylus">stylus</option>
                    </select>
                </label>
                <hr />
            </div>
            {preprocessor === 'scss(sass)' && (
                <div className="showcase-scss">
                    <>
                        {createDemoSet({
                            preCode: '.showcase-scss { @import "styled-css-base/presets/simple/index"; }'
                        })}
                    </>
                </div>
            )}

            {preprocessor === 'less' && (
                <div className="showcase-less">
                    <>
                        {createDemoSet({
                            preCode: '.showcase-less { @import "styled-css-base/presets/demoSet/index"; }'
                        })}
                    </>
                </div>
            )}

            {preprocessor === 'less-on-css' && (
                <div className="showcase-less-on-css">
                    <>
                        {createDemoSet({
                            preCode: '.showcase-less-on-css { @import (less) "styled-css-base/presets/demoSet/index.css"; }'
                        })}
                    </>
                </div>
            )}

            {preprocessor === 'stylus' && (
                <div className="showcase-stylus">
                    <>
                        {createDemoSet({
                            preCode: '.showcase-stylus { @import @import "styled-css-base/presets/demoSet/index"; }'
                        })}
                    </>
                </div>
            )}
        </div>
    )
}

export default Example