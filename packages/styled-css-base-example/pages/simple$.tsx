/**
 * @title Simple
 */

import './simple.scss'
import './simple.less'
import './simple.styl'
import { createDemoSet } from '../demo/demoSet'
import { useMemo, useState } from 'react'

function Example () {
    const [preprocessor, setPreprocessor] = useState('scss')

    const className = useMemo(() => `showcase-${preprocessor}`, [preprocessor])

    const code = useMemo(() => {
        switch (preprocessor) {
            case 'scss': {
                return '.showcase-scss { @import "styled-css-base/presets/simple/index"; }'
            }
            case 'less': {
                return '.showcase-less { @import "styled-css-base/presets/demoSet/index"; }'
            }
            case 'less-on-css': {
                return '.showcase-less-on-css { @import (less) "styled-css-base/presets/demoSet/index.css"; }'
            }
            case 'stylus': {
                return '.showcase-stylus { @import @import "styled-css-base/presets/demoSet/index"; }'
            }
        }
        throw Error('Unknown preprocessor')
    }, [preprocessor])

    return (
        <div style={{ padding: 24 }}>
            <div className="showcase-scss">
                <label>
                    Your preferred preprocessor:
                    <select value={preprocessor} onChange={e => setPreprocessor(e.currentTarget.value)}>
                        <option value="scss">scss(sass)</option>
                        <option value="less">less</option>
                        <option value="less-on-css">less-on-css</option>
                        <option value="stylus">stylus</option>
                    </select>
                </label>
                <hr />
            </div>

            <div className={className}>
                {createDemoSet({ code })}
            </div>
        </div>
    )
}

export default Example