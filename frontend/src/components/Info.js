import React from 'react';
import {ScanOutlined,SwapOutlined,BookOutlined,DownloadOutlined} from '@ant-design/icons';

const Info = () => {
  return (
    <div>
      <div className='info row'>
        <div className='col-3'>
            <div className="row">
                <div className="col-12"><ScanOutlined style={{ fontSize: '200%',color: 'blue'}} /></div>
            </div>
            <div className="row">
                <div className="col-12">Scan</div>
            </div>    
        </div>

        <div className='col-3'>
            <div className="row">
                <div className="col-12"><SwapOutlined style={{ fontSize: '200%',color: 'blue'}}/></div>
            </div>
            <div className="row">
                <div className="col-12">Transfer</div>
            </div> 
        </div>

        <div className='col-3'>
            <div className="row">
                <div className="col-12"><BookOutlined style={{ fontSize: '200%',color: 'blue' }}/></div>
            </div>
            <div className="row">
                <div className="col-12">Bills</div>
            </div>
        </div>

        <div className='col-3'>
            <div className="row">
                <div className="col-12"><DownloadOutlined style={{ fontSize: '200%',color: 'blue'}}/></div>
            </div>
            <div className="row">
                <div className="col-12">Top Up</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Info;