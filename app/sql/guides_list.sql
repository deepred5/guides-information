/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50712
Source Host           : localhost:3306
Source Database       : guides

Target Server Type    : MYSQL
Target Server Version : 50712
File Encoding         : 65001

Date: 2016-09-03 10:39:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `guides_list`
-- ----------------------------
DROP TABLE IF EXISTS `guides_list`;
CREATE TABLE `guides_list` (
  `gindex` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `id` varchar(100) NOT NULL,
  `cardId` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `sex` varchar(100) NOT NULL,
  `workYears` int(11) NOT NULL,
  `specialty` varchar(100) NOT NULL,
  PRIMARY KEY (`gindex`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of guides_list
-- ----------------------------
INSERT INTO `guides_list` VALUES ('1', '张山', '1', '6103113', '22', '男', '2', '摄影');
INSERT INTO `guides_list` VALUES ('22', '张一', '2', '6102112', '22', '男', '4', '跑步');
INSERT INTO `guides_list` VALUES ('23', '王萍', '4', '6102332', '23', '女', '2', '游泳');
INSERT INTO `guides_list` VALUES ('28', '张玲', '5', '61258', '21', '女', '5', '唱歌');
INSERT INTO `guides_list` VALUES ('29', '刘芳', '33', '65252', '15', '女', '2', '骑车');
