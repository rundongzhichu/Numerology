import React from "react";
import "./LeftTree.css"
import { Tree } from "antd";

class LeftTree extends React.Component {

    constructor(props) {
        super(props);
        this.state = {treeList:[]};
        this.state.treeList = [{
            title: "Mysql",
            key: "/MYSQL",
            isLeaf: false,
            objectType: "DATASOURCE",
            children: [{
                title: "Mysql1",
                key: "/MYSQL1",
                isLeaf: true,
                objectType: "DATASOURCE",
            }, {}]
        }, {
            title: "ORACLE",
            key: "/ORACLE",
            children: [{
                title: "Mysql1",
                key: "/MYSQL2",
                isLeaf: false,
                objectType: "DATASOURCE",
            }]
        }];        
    }

        /**     
     * 
     * 这是关键方法：遍历一棵树，找到对应的TreeNode，然后使用实参里的children替代对应TreeNode的孩子
     * 
     * nodeList: TreeNode[]
     * key: String
     * children: TreeNode[]
     */
    createUpdatedTreeNodes(nodeList, key, children) {
        return nodeList.map((node) => {
            if (node.key === key) {
                return {
                ...node,
                children,
                };
            }
            if (node.children) {
                return {
                ...node,
                children: this.createUpdatedTreeNodes(node.children, key, children),
                };
            }
            return node;
            });
    }

    /**
     * lazily load treeData
     * @param {} treeNode 
     * @returns 
     */
    lazyLoadData(treeNode) {
        console.log("treenode = " + JSON.stringify(treeNode));
        return new Promise((resolve) => {
            if (treeNode.children) {
                console.log("Current treeNode has children. Stopping faking.")
                resolve();
                return;
            }
            console.log("Current treeNode has no children. Faking 2.")
            setTimeout(() => {
                let newChildren = [{
                    title: "haha",
                    key: treeNode.key + "/haha",
                    //children: [],
                    isLeaf: false
                },{
                    title: "hehe",
                    key: treeNode.key + "/hehe",
                    //children: [],
                    isLeaf: false
                }];

                let newTreeList = this.createUpdatedTreeNodes(this.state.treeList, treeNode.key, newChildren);
                this.setState({
                    treeList: newTreeList,
                })

                console.log("Current treeNode has no children. Faked 2.")
                resolve();
            }, 100);

        });
    }

    render () {
        return (
            <div className="LeftTree">
                <Tree treeData={this.state.treeList} loadData={this.lazyLoadData.bind(this)}/>
            </div>
        )
    }
}

export default LeftTree;